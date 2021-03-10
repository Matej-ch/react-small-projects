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
        <div>
            <div>
                <div className="timer">
                    {(timeLeft / 1000).toFixed(2)}
                </div>
                <button onClick={() => start()}>Start</button>
                <button onClick={() => reset()}>Restart</button>
            </div>

            <p>{paragraph.split('').map((char,i) => {

                let charClass = '';
                const hasBeenTyped = typedText.length > i;

                if(hasBeenTyped) {
                    charClass = typoIndexes.includes(i) ? 'text-red-500' : 'text-green-500';
                }

                return <span key={i} className={charClass}>{char}</span>
            })}</p>

            <form>
                <textarea value={typedText} onChange={(e) => setTypedText(e.target.value)} name="" id="" cols="30" rows="10" />
            </form>
        </div>
    )
}

export default TypingTester;