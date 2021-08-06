import {useState} from "react";
import useInterval from "@use-it/interval";
import messages from "../messages";

function Typing({even}) {
    return (
        <div className={`flex ${even ? 'justify-end' : 'justify-start'}`}>
            <div className="typing">
                <div className="typing__dot"/>
                <div className="typing__dot"/>
                <div className="typing__dot"/>
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
        <div className="flex flex-col justify-center w-full h-full items-center space-y-2 bg-gray-300">
            <div className={'max-w-lg'}>
                {
                    messages.map((message,index) => {

                        const even = index % 2 === 0;

                        if(messageToShow  +1 === index) {
                            return <Typing key={index} even={even} />
                        }

                        if(index > messageToShow) return <div key={index} />

                        return (
                            <div key={index} className="flex flex-row py-4">
                                <div className="avatar px-1"> &#127772; </div>
                                <div className="px-2">{message.text}</div>
                                <div className="avatar px-1"> &#127771; </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Message