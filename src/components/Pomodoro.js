import { useState, useRef } from 'react';
import {padTime} from '../helpers.js';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FiPauseCircle,FiPlayCircle,FiSettings,FiSkipForward,FiRefreshCcw } from "react-icons/fi";
import { IconContext } from "react-icons";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {motion} from "framer-motion";

const Pomodoro = () => {
    const [title, setTitle] = useState('Start countdown!');
    const [mins, setMins] = useState(10);
    const [sec, setSec] = useState(0);
    const [timeLeft ,setTimeLeft] = useState((mins * 60) + sec);
    const [isRunning, setIsRunning] = useState(false);
    const [progress,setProgress] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [rounds,setRounds] = useState(4);
    const [rotation, setRotation] = useState(0);

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
        console.log(mins);
        console.log(sec);
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

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(editing => {
            return !editing;
        });
        resetTimer();
    }

    function handleMinutes(e) {
        setMins(parseInt(e.target.value));
    }

    function handleSeconds(e) {
        setSec(parseInt(e.target.value))
    }

    return (
        <div className={`pomodoro flex flex-col justify-center w-full h-full items-center space-y-2 ${ isRunning ? 'pomodoro-run' : 'pomodoro-stop'}`}>
            <h2 className="font-semibold uppercase text-xl lg:text-3xl text-blue-900 text-opacity-80 py-4 my-4">{title}</h2>

            {!isEditing ? (<div style={{ width: 200, height: 200 }} onDoubleClick={() => markAsEditing()}>
                <CircularProgressbar minValue={0} maxValue={(mins * 60) + sec} value={progress} text={`${minutes}:${seconds}`} strokeWidth={3} />
            </div>) :
                (<div style={{ width: 200, height: 200 }} >

                    <form onSubmit={handleSubmit}>
                        <div className="webflow-style-input mb-2">
                            <label className="text-gray-600 font-bold text-sm">Minutes</label>
                            <input type="number" step="1" min="1" defaultValue={mins} onChange={handleMinutes}/>
                        </div>

                        <div className="webflow-style-input mb-2">
                            <label className="text-gray-600 font-bold text-sm">Seconds</label>
                            <input type="number" step="1" min={0} max={60} defaultValue={sec}  onChange={handleSeconds}/>
                        </div>

                        <input type="submit" value="OK" className="border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200" />
                    </form>

            </div>)
            }

            <div className="buttons space-y-2 lg:space-x-2 pt-8 w-full flex flex-col lg:flex-row justify-center items-center lg:items-baseline max-w-sm justify-between">

                <IconContext.Provider value={{ className: "text-gray-700 text-2xl cursor-pointer" }}><FiSettings /></IconContext.Provider>

                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={!isRunning}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit>

                        <IconContext.Provider value={{ className: "text-gray-700 text-2xl cursor-pointer" }}>
                            {!isRunning ? (<FiPlayCircle onClick={startTimer }/>) : (<FiPauseCircle onClick={stopTimer}/>)}
                        </IconContext.Provider>

                    </CSSTransition>
                </SwitchTransition>

                <IconContext.Provider value={{ className: "text-gray-700 text-2xl cursor-pointer" }}><FiSkipForward /></IconContext.Provider>

                <motion.div animate={{rotate: rotation }} transition={{ duration: 0.25 }} onClick={() => setRotation(rotation + 180)}>
                    <IconContext.Provider value={{ className: "text-gray-700 text-2xl cursor-pointer" }}><FiRefreshCcw  onClick={resetTimer} /></IconContext.Provider>
                </motion.div>

            </div>

            <div className="max-w-md border border-r-2 bg-white">
                <h2 className="text-center">Advanced
                    <button>x</button>
                </h2>
                <form className="flex flex-row flex-wrap">
                    <label>
                        Focus time
                        <input type="text"/>
                    </label>
                    <label>
                        Short break
                        <input type="text"/>
                    </label>
                    <label>
                        Long break
                        <input type="text"/>
                    </label>
                    <label>
                        Rounds
                        <input type="number" step={1} min={1}/>
                    </label>

                    <input type="submit" value="Confirm"/>
                </form>
            </div>

        </div>
    )
}

export default Pomodoro;