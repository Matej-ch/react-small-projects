import { useState,useEffect } from 'react';
import useCountDown from "react-countdown-hook/src";

const secondsToCount = 10;
const paragraph = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias commodi consectetur dicta dolor esse, fuga id labore laudantium maiores maxime necessitatibus numquam pariatur quis quisquam sapiente similique sint ullam.`;

function findTypos(str1,str2) {
    let typos = [];

    str2.split('').forEach(function (character,index) {
        if(character !== str1.charAt(index)) { typos.push(index); }
    })

    return typos;
}

const TypingTester = () => {
    const [typedText, setTypedText] = useState('')
    const [typoIndexes, setTypoIndexes] = useState([]);
    const [timeLeft, { start, reset }] = useCountDown(secondsToCount * 1000, 100);

    //finding typos
    useEffect(() => {
        setTypoIndexes(findTypos(paragraph,typedText))
    },[typedText])

    useEffect(() => {
        if(typedText.length === 0) return;

        if(timeLeft !== 0) return;

        const  wordsTyped = (typedText.length - typoIndexes.length) / 5;
        const minMultiplier = 60 / secondsToCount;
        const wpm = wordsTyped * minMultiplier;

        alert(`you type at ${wpm.toFixed(2)}`);

    },[timeLeft])

    return (
        <div className={'px-6'}>
            <div className="timer p-2">
                Remaining time: {(timeLeft / 1000).toFixed(2)}
            </div>
            <div className={'flex flex-row space-x-2'}>
                <div className={'p-2'}>
                    <button className={'text-center w-full bg-blue-900 hover:bg-blue-700 rounded-md text-white py-3 px-6 font-medium'} onClick={() => start()}>Start</button>
                </div>
                <div className={'p-2'}>
                    <button className={'text-center w-full bg-blue-900 hover:bg-blue-700 rounded-md text-white py-3 px-6 font-medium'} onClick={() => reset()}>Restart</button>
                </div>
            </div>

            <p className={'py-4'}>
                {paragraph.split('').map((char,i) => {

                    let charClass = '';
                    const hasBeenTyped = typedText.length > i;

                    if(hasBeenTyped) {
                        charClass = typoIndexes.includes(i) ? 'text-red-500' : 'text-green-500';
                    }

                    return <span key={i} className={charClass}>{char}</span>
                })}
            </p>

            <form>
                <textarea placeholder={'Start typing here'}
                          className="w-full max-w-max h-28 border-2 border-gray-200 rounded-md p-2 focus:outline-none focus:ring-4 focus:ring-indigo-50 focus:border-indigo-300"
                          value={typedText}
                          onChange={(e) => setTypedText(e.target.value)}
                          name="" id="" cols="60" rows="10" />
            </form>
        </div>
    )
}

export default TypingTester;