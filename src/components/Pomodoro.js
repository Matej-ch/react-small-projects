import { useState, useRef } from 'react';
import {padTime} from '../helpers.js';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FiPauseCircle,FiPlayCircle,FiSettings,FiSkipForward,FiRefreshCcw } from "react-icons/fi";
import { IconContext } from "react-icons";
import {CSSTransition, SwitchTransition} from "react-transition-group";

const Pomodoro = () => {
    const [title, setTitle] = useState('Start countdown!');
    const [mins, setMins] = useState(10);
    const [sec, setSec] = useState(0);
    const [timeLeft ,setTimeLeft] = useState((mins * 60) + sec);
    const [isRunning, setIsRunning] = useState(false);
    const [progress,setProgress] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [rounds,setRounds] = useState(4);

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
        setTimeLeft((mins * 60) + sec);
        setProgress(0);
        intervalRef.current = null;
        setIsRunning(false);
    }

    function markAsEditing() {
        setIsEditing(editing => {
            return !editing;
        });
    }

    return (
        <div className={`pomodoro flex flex-col justify-center w-full h-full items-center space-y-2 ${ isRunning ? 'pomodoro-run' : 'pomodoro-stop'}`}>
            <h2 className="font-semibold uppercase text-xl lg:text-3xl text-blue-900 text-opacity-80 py-4 my-4">{title}</h2>

            {!isEditing ? (<div style={{ width: 200, height: 200 }} onDoubleClick={() => markAsEditing()}>
                <CircularProgressbar minValue={0} maxValue={(mins * 60) + sec} value={progress} text={`${minutes}:${seconds}`} strokeWidth={3} />
            </div>) :
                (<div style={{ width: 200, height: 200 }} >
                <input type="number" step="1" min="1" placeholder="minutes" defaultValue={mins} onInput={ e => {setMins(parseInt(e.target.value)); resetTimer()} } />
                <input type="number" step="1" min={0} max={60} defaultValue={sec}  onInput={ e => { setSec(parseInt(e.target.value)); resetTimer()} }/>
                    <button onClick={() => markAsEditing()}>OK</button>
            </div>)
            }

            <div className="buttons space-y-2 lg:space-x-2 pt-8 w-full flex flex-col lg:flex-row justify-center items-center lg:items-baseline max-w-sm justify-between">

                <IconContext.Provider value={{ className: "text-gray-700 text-2xl cursor-pointer" }}><FiSettings /></IconContext.Provider>

                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={!isRunning}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit
                    >

                        <IconContext.Provider value={{ className: "text-gray-700 text-2xl cursor-pointer" }}>

                            {!isRunning ? (<FiPlayCircle onClick={startTimer }/>) : (<FiPauseCircle onClick={stopTimer}/>)}

                        </IconContext.Provider>

                    </CSSTransition>
                </SwitchTransition>


                <IconContext.Provider value={{ className: "text-gray-700 text-2xl cursor-pointer" }}><FiSkipForward /></IconContext.Provider>

                <IconContext.Provider value={{ className: "text-gray-700 text-2xl cursor-pointer" }}><FiRefreshCcw  onClick={resetTimer} /></IconContext.Provider>
            </div>

        </div>
    )
}

export default Pomodoro;