import { useState } from 'react';
import { DndProvider,useDrag,useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const MathGame = () => {

    const [numberOne,setNumberOne] = useState(1);
    const [numberTwo,setNumberTwo] = useState(3);
    const [operator,setOperator] = useState('*');

    function handleDrop(spot, item) {
        if(spot === 'numberOne') setNumberOne(item.text);
        if(spot === 'numberTwo') setNumberTwo(item.text)
        if(spot === 'operator') setOperator(item.text)
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="math w-full h-full bg-green-300 mx-auto flex justify-center">
                <div className="math-card">
                    <Spot type="number" spot="numberOne" text={numberOne} handleDrop={handleDrop}/>

                    <Spot type="number" spot="numberTwo" text={numberTwo} handleDrop={handleDrop} />

                    <Spot type="operator" spot="operator" text={operator} handleDrop={handleDrop} />

                    <div className="total">{eval(`${numberOne}${operator}${numberTwo}`)}</div>
                </div>

                <div>
                    <div className="cards numbers">
                        {Array(10)
                            .fill(0)
                            .map((n, i) => (

                                <Card key={i} text={i + 1} type="number" />
                            ))}
                    </div>

                    <div className="cards operators">
                        {['*', '-', '+', '/'].map((o, i) => (
                            <Card text={o} key={i}  type="operator"/>
                        ))}
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

function Card({type,text}) {

    const [{opacity}, dragRef] = useDrag(() => ({
        item: { type,text },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    }))

    return (
        <div className="card" ref={dragRef} style={{opacity}}>
            {text}
        </div>
    )
}

function Spot({type, text,spot, handleDrop}) {
    const [{ canDrop,isOver }, dropRef] = useDrop(({
        accept: type,
        drop: (item) => {
            handleDrop(spot,item)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: monitor.canDrop()
        }),
    }));

    let backgroundColor = '#f2f2f2';
    if(canDrop) backgroundColor = '#3db897';
    if(isOver) backgroundColor = '#4dbcb5';

    return (
        <div className="spot" ref={dropRef} style={{ backgroundColor }}>{text}</div>
    )
}

export default MathGame;