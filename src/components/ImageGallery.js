import {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {useCallback} from "react";

const accessKey = process.env.REACT_APP_UNSPLASH_KEY;

const ImageGallery = () => {

    const [images,setImages] = useState([]);
    const [page, setPage] = useState(2);
    const [query, setQuery] = useState('');

    const fetchData = useCallback(() => {
        let apiUrl = `https://api.unsplash.com/`;

        if(query) {
            apiUrl += 'search/'
        }

        apiUrl += `photos/?client_id=${accessKey}&page=${page}`;

        if(query) {
            apiUrl += `&query=${query}`;
        }


        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                const imagesFromApi = data.results ?? data;

                if(page === 1) return setImages(imagesFromApi);

                setImages(images => [...images,...imagesFromApi]);

            }).catch(err => console.error(err))
    },[page,query])

    useEffect(() => {
        fetchData();
    },[page,fetchData])

    if(!accessKey) {
        return (
            <a href="https://unsplash.com/developers">Go here to get unsplash api key</a>
        )
    }

    function searchPhotos(e) {
        e.preventDefault();
        setPage(1);
        fetchData()
    }

    return (
        <div className="py-8">
            <h1 className="text-center pb-">Image gallery</h1>

            <form onSubmit={searchPhotos} className="m-4 flex justify-center">
                <input value={query} onChange={e => setQuery(e.target.value)}
                    className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
                    placeholder="search pictures"/>
                <button type="submit"
                    className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Search
                </button>
            </form>

            <InfiniteScroll
                dataLength={images.length} //This is important field to render the next data
                next={() => setPage((page) => page + 1) }
                hasMore={true}
                loader={<h4 className="text-center">Loading...</h4>}>
                <div className="image-grid grid max-w-7xl mx-auto lg:px-20">
                    {
                        images.map((image,index) => (
                            <a className="image" href={image.links.html} key={index} target="_blank" rel="noopener noreferrer">
                                <img className="shadow-lg rounded w-full h-full align-middle border-none object-cover" src={image.urls.regular} alt={image.alt_description}/>
                            </a>
                        ))
                    }
                </div>

            </InfiniteScroll>
        </div>
    );
}

export default ImageGallery;