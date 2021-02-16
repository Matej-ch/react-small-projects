import {useEffect, useRef, useState} from "react";

const Link = () => {

    const canvasRef = useRef(null)
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    //set width and height , run only once
    useEffect(() => {
        const context = canvasRef.current.getContext('2d');
        context.canvas.height = window.innerHeight;
        context.canvas.width = window.innerWidth;
    }, []);

    // run every time when x or y changes
    useEffect(() => {
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0,0,window.innerWidth,window.innerHeight)
        context.fillRect(x,y,100,100); //rectangle update by adding 100 to x and y axes
    },[x,y]);

    // event listener on window, runs only one times
    useEffect(() => {
        window.addEventListener('keydown',handleKeyDown);

        function handleKeyDown(e) {
            if(e.key === 'ArrowUp' || e.key.toUpperCase() === 'W') {move('up');}

            if(e.key === 'ArrowDown' || e.key.toUpperCase() === 'S') {move('down');}

            if(e.key === 'ArrowRight' || e.key.toUpperCase() === 'D') {move('right');}

            if(e.key === 'ArrowLeft' || e.key.toUpperCase() === 'A') {move('left');}
        }

        return () => window.removeEventListener('keydown',handleKeyDown)
    },[])

    function move(direction) {
        if(direction === 'up') { setY((y) => y - 20) }

        if(direction === 'down') { setY((y) => y + 20) }

        if(direction === 'right') { setX((x) => x + 20) }

        if(direction === 'left') { setX((x) => x - 20) }
    }

    return (
        <div className="link-app">
            <canvas ref={canvasRef} />

            <div className="arrows">
                <button onClick={() => setY((y) => y - 20)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Up</button>
                <button onClick={() => setX((x) => x - 20)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Left</button>
                <button onClick={() => setY((y) => y + 20)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Down</button>
                <button onClick={() => setX((x) => x + 20)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Right</button>
            </div>

            <div className="images">
                <img src="https://i.imgur.com/JYUB0m3.png" alt="Down" />
                <img src="https://i.imgur.com/GEXD7bk.gif" alt="Right" />
                <img src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
                <img src="https://i.imgur.com/4LGAZ8t.gif" alt="Left" />
            </div>

        </div>
    );
}

export default Link;