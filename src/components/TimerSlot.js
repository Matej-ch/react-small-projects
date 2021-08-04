import {useState} from "react";

const TimerSlot = ({index, timer ,updateTimers}) => {

    const [time,setTime] = useState(timer.time);
    const [text,setText] = useState(timer.text);

    function handleBlur() {
        updateTimers(index,time,text);
    }

    return (
        <form className="flex flex-row space-x-1 mb-1" key={index}>
            <input type="number" value={time}  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 text-gray-700"
                   onChange={(e) => setTime(+e.target.value)}
                   onBlur={handleBlur}/>
            <input type="text" value={text}  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 text-gray-700"
                   onChange={(e) => setText(e.target.value)}
                   onBlur={handleBlur}/>
        </form>
    )
}

export default TimerSlot;