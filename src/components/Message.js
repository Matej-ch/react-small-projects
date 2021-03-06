import {useState} from "react";
import useInterval from "@use-it/interval";

const messages = [
    {text: 'first message'},
    {text: 'second message'},
    {text: 'this ia test'},
    {text: 'hello world'},
]

function Typing({even}) {
    return (
        <div className={`typing ${even ? 'is-right' : 'is-left'}`}>
            <div className="dots">
                dots here
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    )
}

const Message = () => {

    const [messageToShow, setMessageShow] = useState(0);

    useInterval(() => {
        setMessageShow(messageToShow => messageToShow + 1);
    },2000)

    return (
        <div className="pomodoro flex flex-col justify-center w-full h-full items-center space-y-2 bg-gray-300">

            {
                messages.map((message,index) => {

                    const even = index % 2 === 0;

                    if(messageToShow  +1 === index) {
                        return <Typing key={index} even={even} />
                    }

                    if(index > messageToShow) return <div key={index} />

                    return (
                        <div key={index} className="message flex flex-row py-4">
                            <div className="avatar px-1"> :D </div>
                            <div className="px-2">{message.text}</div>
                            <div className="avatar px-1"> :P </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Message