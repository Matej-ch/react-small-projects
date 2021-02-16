import {useEffect, useRef, } from "react";
import useMovement from "../hooks/useMovement";

const Link = () => {

    const canvasRef = useRef(null);
    const linkDownRef = useRef(null);
    const linkUpRef = useRef(null);
    const linkLeftRef = useRef(null);
    const linkRightRef = useRef(null);

    const {x,y,direction,move} = useMovement();

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

        let theLinkRef;
        if(direction === 'down') theLinkRef = linkDownRef;
        if(direction === 'up') theLinkRef = linkUpRef;
        if(direction === 'left') theLinkRef = linkLeftRef;
        if(direction === 'right') theLinkRef = linkRightRef;

        context.drawImage(theLinkRef.current,x,y);
    },[x,y,direction]);

    return (
        <div className="link-app">
            <canvas ref={canvasRef} />

            <div className="arrows">
                <button onClick={() => move('up')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Up</button>
                <button onClick={() => move('left')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Left</button>
                <button onClick={() => move('down')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Down</button>
                <button onClick={() => move('right')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Right</button>
            </div>

            <div className="images">
                <img ref={linkDownRef} src="https://i.imgur.com/JYUB0m3.png" alt="Down" />
                <img ref={linkRightRef} src="https://i.imgur.com/GEXD7bk.gif" alt="Right" />
                <img ref={linkUpRef} src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
                <img ref={linkLeftRef} src="https://i.imgur.com/4LGAZ8t.gif" alt="Left" />
            </div>

        </div>
    );
}

export default Link;