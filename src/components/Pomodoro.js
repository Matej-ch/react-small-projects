import { useState, useRef } from 'react';
import {padTime} from '../helpers.js';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Pomodoro = () => {
    const [title, setTitle] = useState('Start countdown!');
    const [timeLeft ,setTimeLeft] = useState(25*60);
    const [isRunning, setIsRunning] = useState(false);
    const [progress,setProgress] = useState(0);

    const minutes = padTime(Math.floor(timeLeft / 60));
    const seconds = padTime(timeLeft - minutes * 60);
    const intervalRef = useRef(null);

    function startTimer() {
        if(intervalRef.current !== null) return;

        setIsRunning(true);
        setTitle(`Let's gooooo!!!`);
        intervalRef.current = setInterval(() => {

            setProgress(progress => {
                return progress + 1;
            })

            setTimeLeft(timeLeft => {

                if(timeLeft >= 1) return timeLeft - 1;

                resetTimer();
                return 0;
            })
        },1000)
    }

    function stopTimer() {
        if(intervalRef.current === null) return;

        clearInterval(intervalRef.current);
        setTitle(`Start again!`);
        intervalRef.current = null;
        setIsRunning(false);
    }

    function resetTimer() {
        clearInterval(intervalRef.current);
        setTitle('Start countdown!');
        setTimeLeft(25*60);
        setProgress(0);
        intervalRef.current = null;
        setIsRunning(false);
    }

    return (
        <div className="pomodoro flex flex-col justify-center w-full h-full items-center space-y-2 bg-blue-300">
            <h2 className="font-semibold uppercase text-xl lg:text-3xl text-blue-900 text-opacity-80">{title}</h2>

            <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar minValue={0} maxValue={25*60} value={progress} text={`${minutes}:${seconds}`} strokeWidth={3} />
            </div>

            <div className="buttons space-y-2 lg:space-x-2 w-full flex flex-col lg:flex-row justify-center items-center lg:items-baseline">

                { !isRunning && <button onClick={startTimer} className="uppercase px-8 py-2 bg-yellow-300 text-yellow-600 max-w-max shadow-sm hover:shadow-lg font-semibold rounded-sm">Start</button> }

                { isRunning && <button onClick={stopTimer} className="uppercase px-8 py-2 bg-yellow-300 text-yellow-600 max-w-max shadow-sm hover:shadow-lg font-semibold rounded-sm">Stop</button> }

                <button onClick={resetTimer} className="uppercase px-8 py-2 bg-yellow-300 text-yellow-600 max-w-max shadow-sm hover:shadow-lg font-semibold rounded-sm">Reset</button>
            </div>

        </div>
    )
}

export default Pomodoro;