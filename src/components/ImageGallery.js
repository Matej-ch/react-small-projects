import {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {useCallback} from "react";

const accessKey = process.env.REACT_APP_UNSPLASH_KEY;

const ImageGallery = () => {

    const [images,setImages] = useState([]);
    const [page, setPage] = useState(1);
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
        <div>
            <h1>Image gallery</h1>

            <form onSubmit={searchPhotos}>
                <input type="text" placeholder="search gallery" value={query} onChange={e => setQuery(e.target.value)}/>
                <button>Search</button>
            </form>

            <InfiniteScroll
                dataLength={images.length} //This is important field to render the next data
                next={() => setPage((page) => page + 1) }
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >

                <div className="image-grid grid">
                    {
                        images.map((image,index) => (
                            <a className="image" href={image.links.html} key={index} target="_blank" rel="noopener noreferrer">
                                <img className="flex w-full h-full object-cover" src={image.urls.regular} alt="Cat"/>
                            </a>
                        ))
                    }
                </div>

            </InfiniteScroll>


        </div>
    );
}

export default ImageGallery;