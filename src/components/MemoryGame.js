import shuffle from 'lodash.shuffle'
import { useState,useEffect } from 'react'
import cards from "../cards";


const doubleCards = shuffle([...cards,...cards]);

const MemoryGame = () => {

    const [opened, setOpened] = useState([]);
    const [matched, setMatched] = useState([]);
    const [moves, setMoves] = useState(0);

    function flipCard(index) {
        setMoves((moves) => moves +1)
        setOpened((opened) => [...opened, index])
    }

    useEffect(() => {
        if(opened.length < 2) return;

        const firstCard = doubleCards[opened[0]];
        const secondCard = doubleCards[opened[1]];

        if(firstCard.name === secondCard.name) {
            setMatched((matched) => [...matched,firstCard.id]);
        }

    },[opened]);

    useEffect(() => {
        if(opened.length === 2) { setTimeout(() => setOpened([]),800)  }
    },[opened])

    useEffect(() => {
        if(matched.length === cards.length) {alert('Winner winner chicken dinner')}
    },[matched])

    function reset() {
        setMoves(0);
        setOpened([]);
        setMatched([]);
    }

    return (
        <div className="memory-game p-4">
            <div className="cards max-w-md">
                {doubleCards.map((card,index) => {
                    let isFlipped = false;


                    if(opened.includes(index)) isFlipped = true;
                    if(matched.includes(card.id)) isFlipped = true;

                    return (<Card card={card} index={index}  key={index} isFlipped={isFlipped} flipCard={flipCard}/>)
                })}
            </div>

            <div className={'text-4xl pt-6 max-w-md mx-auto px-4 flex justify-between'}>
                <span>{moves} <strong>moves</strong></span>
                <button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-base'} onClick={() => reset()}>RESET</button>
            </div>
        </div>
    )
}

function Card({index,card,isFlipped, flipCard}) {
    return (
        <button onClick={() => flipCard(index)} className={`memory-card h-32 w-32 ${isFlipped ? 'flipped' : ''}`}>
            <div className="inner">
                <div className="front bg-gradient-to-b from-blue-800 to-blue-600 font-bold text-6xl text-white">
                    {card.name}
                </div>
                <div className="back bg-gradient-to-b from-red-800 to-red-600 hover:from-red-600 hover:to-red-400 font-bold text-6xl text-white"> {isFlipped ? '' : '?'} </div>
            </div>
        </button>
    );
}

export default MemoryGame;