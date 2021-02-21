import {useState} from "react";
import TimerSlot from "./TimerSlot";
import {useStopwatch} from "react-timer-hook";
import {useEffect, useCallback} from "react";
import { useSpeechSynthesis } from "react-speech-kit"

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

    const {speak, speaking, supported} = useSpeechSynthesis();

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
        newTimers[index].time= time;
        newTimers[index].text = text;

        setTimers(newTimers);
    }

    function addTimer() {
        const newTimers = [...timers,{time:100, 'text': 'new timer'}];
        setTimers(newTimers)
    }

    if(!supported) {
        return (<div>Your browser not supported</div>);
    }

    return (
        <div className="calendar flex flex-col justify-center w-full h-full items-center space-y-2 bg-yellow-200">
            <h2 className="text-xl">Talk</h2>

            <div className="flex flex-col">

                {timers.map((timer,index) => (
                   <TimerSlot key={index} index={index} timer={timer} updateTimers={updateTimers}/>
                ))}

                <button onClick={addTimer} className="uppercase px-8 py-2 bg-blue-300 text-blue-600 max-w-max shadow-sm hover:shadow-lg font-semibold rounded-sm">Add</button>
            </div>

            <h2 className="text-4xl">{seconds}</h2>

            <div className="flex flex-row space-x-1">
                {!isRunning && (<button onClick={start} className="uppercase px-8 py-2 bg-pink-300 text-pink-600 max-w-max shadow-sm hover:shadow-lg font-semibold rounded-sm">Start</button>) }

                {isRunning && (<button onClick={reset} className="uppercase px-8 py-2 bg-red-300 text-red-600 max-w-max shadow-sm hover:shadow-lg font-semibold rounded-sm">stop</button>) }
            </div>

            {speaking && <p>Synthesizing speech</p>}
        </div>
    )
}

export default Speech;