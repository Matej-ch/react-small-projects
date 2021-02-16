import {useEffect, useState} from "react";

export default function useMovement () {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const [direction, setDirection] = useState('down');

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
    },[]);

    function move(dir) {

        setDirection(dir);

        if(dir === 'up') { setY((y) => y - 20); }

        if(dir === 'down') { setY((y) => y + 20) }

        if(dir === 'right') { setX((x) => x + 20) }

        if(dir === 'left') { setX((x) => x - 20) }
    }

    return {x,y,direction,move}
}