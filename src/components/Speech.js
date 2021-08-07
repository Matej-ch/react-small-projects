import {useState} from "react";
import TimerSlot from "./TimerSlot";
import {useStopwatch} from "react-timer-hook";
import {useEffect, useCallback} from "react";
import { useSpeechSynthesis } from "react-speech-kit"
import {FiPlus} from "react-icons/fi";

const Speech = () => {

    const [timers, setTimers] = useState([
        {time: 2,text: 'This is a test broadcast'},
        {time: 4,text: 'Hello world'},
        {time: 6,text: 'How are you'},
    ]);

    const {
        seconds,
        isRunning,
        start,
        reset,
    } = useStopwatch();

    const {speak, speaking, supported } = useSpeechSynthesis();

    const doReset = useCallback(() => reset(),[]);
    const doSpeak = useCallback((...p) => speak(...p),[]);

    useEffect(() => {
        const foundTimer = timers.find(timer => { return timer.time === seconds });

        if(foundTimer) {
            doSpeak({text: foundTimer.text});
        }

        if(seconds > timers[timers.length - 1].time) {
            doReset();
        }

    },[seconds,timers,doReset,doSpeak])

    function updateTimers(index,time,text) {
        const newTimers = [...timers];
        newTimers[index].time = time;
        newTimers[index].text = text;

        setTimers(newTimers);
    }

    function addTimer() {
        const newTimers = [...timers,{time:20, 'text': 'new timer'}];
        setTimers(newTimers)
    }

    if(!supported) {
        return (<div>Your browser is not supported for speech synthesizing</div>);
    }

    return (
        <div className="flex flex-col justify-center w-full h-full items-center space-y-2 bg-gradient-to-r from-green-400 to-blue-500">
            <div className="text-to-speech-wrapper">
                <h2 className="text-xl">Talk</h2>

                <div className="flex flex-col">

                    {timers.map((timer,index) => (
                        <TimerSlot key={index} index={index} timer={timer} updateTimers={updateTimers}/>
                    ))}

                    <div className={'flex flex-row justify-between'}>
                        <button onClick={addTimer} className="border-2 border-yellow-600 rounded-sm px-3 py-2 text-yellow-400 cursor-pointer bg-yellow-600 hover:text-yellow-200 font-bold flex items-center">
                            <FiPlus />
                             Add
                        </button>

                        {!isRunning && (<button onClick={start} className="border-2 border-green-600 rounded-sm px-3 py-2 text-green-400 cursor-pointer bg-green-600 hover:text-green-200 font-bold">Start</button>) }

                        {isRunning && (<button onClick={reset} className="border-2 border-red-600 rounded-sm px-3 py-2 text-red-400 cursor-pointer bg-red-600 hover:text-red-200 font-bold">Stop</button>) }
                    </div>

                </div>

                <h2 className="text-2xl pt-2 text-gray-800 flex flex-row justify-between">
                    <span>Time: {seconds}s</span>
                    {speaking && <p>Synthesizing speech</p>}
                </h2>


            </div>

        </div>
    )
}

export default Speech;