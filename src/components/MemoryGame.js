import shuffle from 'lodash.shuffle'
import { useState,useEffect } from 'react'

/**@todo  move to file */
const cards = [
    {id:1, name: 'A' },
    {id:2, name: 'B' },
    {id:3, name: 'C' },
    {id:4, name: 'D' },
    {id:5, name: 'E' },
    {id:6, name: 'F' }
]

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

    return (
        <div className="memory-game">
            <p>
                {moves} <strong>moves</strong>
            </p>
            <div className="cards">
                {doubleCards.map((card,index) => {
                    let isFlipped = false;


                    if(opened.includes(index)) isFlipped = true;
                    if(matched.includes(card.id)) isFlipped = true;

                    return (<Card card={card} index={index}  key={index} isFlipped={isFlipped} flipCard={flipCard}/>)
                })}
            </div>
        </div>
    )
}

function Card({index,card,isFlipped, flipCard}) {
    return (
        <button onClick={() => flipCard(index)} className={`memory-card h-32 w-32 ${isFlipped ? 'flipped' : ''}`}>
            <div className="inner">
                <div className="front bg-blue-300">
                    {card.name}
                </div>
                <div className="back"> ? </div>
            </div>
        </button>
    );
}

export default MemoryGame;