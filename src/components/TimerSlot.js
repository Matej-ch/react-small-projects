import {useState} from "react";

const TimerSlot = ({index, timer ,updateTimers}) => {

    const [time,setTime] = useState(timer.time);
    const [text,setText] = useState(timer.text);

    function handleBlur() {
        updateTimers(index,time,text);
    }

    return (
        <form className="flex flex-row space-x-1 mb-1" key={index}>
            <input type="number" value={time}  className="p-1"
                   onChange={(e) => setTime(+e.target.value)}
                   onBlur={handleBlur}/>
            <input type="text" value={text}  className="p-1"
                   onChange={(e) => setText(e.target.value)}
                   onBlur={handleBlur}/>
        </form>
    )
}

export default TimerSlot;