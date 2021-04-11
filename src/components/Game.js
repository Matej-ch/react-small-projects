import { useState, useEffect } from 'react';

import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'

const choices = [
    {id:1,name:'rock',icon:rock,losesTo: 2 },
    {id:2,name:'Paper',icon:paper,losesTo: 3 },
    {id:3,name:'Scissors',icon:scissors,losesTo: 1},
];

function Game() {
    const [wins, setWins] = useState(0);
    const [loss, setLoss] = useState(0);
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [gameState,setGameState] = useState(null);

    useEffect(() => {
        restartGame()
    },[])

    function handleUserChoice(choice) {
        const chosenChoice = choices.find(c => c.id === choice);
        setUserChoice(chosenChoice);

        if(chosenChoice.losesTo === computerChoice.id) {
            setLoss( losses => losses + 1);
            setGameState('lose')
        } else if (computerChoice.losesTo === chosenChoice.id) {
            setWins( wins => wins + 1);
            setGameState('win')
        } else if (computerChoice.id === chosenChoice.id) {
            setGameState('draw')
        }
    }

    function restartGame() {
        setGameState(null);
        setUserChoice(null);

        setComputerChoice(choices[Math.floor(Math.random() * choices.length)])
    }

    return (
        <div className="flex flex-col justify-center w-full h-screen items-center bg-purple-300">

            {gameState && <div
                className="bg-indigo-100 border-t-4 border-indigo rounded-b text-indigo-900 px-4 py-3 shadow-md my-2">

                <div className="flex flex-row justify-between items-baseline space-x-2">
                    <p className="text-sm">{userChoice.name}</p>
                    {gameState === 'win' && <h1>You won!</h1>}
                    {gameState === 'lose' && <h1>You lost!</h1>}
                    {gameState === 'draw' && <h1>You tied!</h1>}
                    <p className="text-sm">{computerChoice.name}</p>
                </div>

                <div className="text-center pt-4">
                    <button onClick={restartGame} className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 transform hover:scale-110">Restart</button>
                </div>

            </div>}

            <div className="flex flex-col items-center">
                <h1 className="text-gray-800 px-8 py-4 text-3xl">Rock. Paper. Scissors</h1>
                <div className="flex flex-row space-x-4 px-2">
                    <div className="flex items-baseline">
                        <span className="text-green-800 text-5xl font-bold pr-2">{wins}</span>
                        <span className="text-2xl text-gray-800">{wins ? 'Win' : 'Wins'}</span>
                    </div>
                    <div className="flex items-baseline">
                        <span className="text-red-800 text-5xl font-bold pr-2">{loss}</span>
                        <span className="text-2xl text-gray-800">{loss === 1 ? 'Loss' : 'Losses'}</span>
                    </div>
                </div>
            </div>


            <div className="flex flex-row justify-between w-full max-w-lg mt-8">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="pb-2">You</h2>

                    <div onClick={() => handleUserChoice(1)} className="rounded-full h-24 w-24 bg-yellow-500 text-gray-700 flex justify-center items-center cursor-pointer mb-2">
                        <img src={rock} alt="rock"/>
                    </div>

                    <div onClick={() => handleUserChoice(2)} className="rounded-full h-24 w-24 bg-green-500 text-gray-700 flex justify-center items-center cursor-pointer mb-2">
                        <img src={paper} alt="paper"/>
                    </div>

                    <div onClick={() => handleUserChoice(3)} className="rounded-full h-24 w-24 bg-purple-500 text-gray-700 flex justify-center items-center cursor-pointer mb-2">
                        <img src={scissors} alt="scissors"/>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="pb-2">Computer</h2>

                    <div className="rounded-full h-24 w-24 bg-black text-gray-300 flex justify-center items-center cursor-pointer">?</div>
                </div>
            </div>

        </div>
    )
}

export default Game;