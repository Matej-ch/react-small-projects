import CategorySelector from "./CategorySelector";
import DifficultySelector from "./DifficultySelector";
import Scoreboard from "./Scoreboard";
import Question from "./Question";
import ResultModal from "./ResultModal";
import {useState} from "react";
import useTrivia from "../hooks/useTrivia";


const Trivia = () => {

    const {question,getQuestion,category,setCategory,difficulty,setDifficulty} = useTrivia();

    const [isCorrect,setIsCorrect] = useState(null);
    const [correctScore, setCorrectScore] = useState(0);
    const [wrongScore, setWrongScore] = useState(0);

    function handleQuestionAnswered(answer) {
        const isAnswerCorrect = answer === question.correct_answer;
        setIsCorrect(isAnswerCorrect);

        if(isAnswerCorrect) {
            setCorrectScore(score =>score+1)
        } else {
            setWrongScore(score =>score+1)
        }
    }

    function handleNextQuestion() {
        setIsCorrect(null);
        getQuestion();
    }

    return (
        <div className="pomodoro flex flex-col justify-center w-full h-full items-center space-y-2 bg-yellow-100">

            <div className={'w-1/6'}>
                {isCorrect !== null && <ResultModal isCorrect = {isCorrect} question={question} getQuestion={handleNextQuestion}/>}

                <Scoreboard correct={correctScore} wrong={wrongScore}/>

                <div className="header flex flex-row justify-between border-2 bg-gray-50 border-gray-100 p-2 mb-2 rounded-md">
                    <CategorySelector category={category} chooseCategory={setCategory}/>
                    <DifficultySelector difficulty={difficulty} chooseDifficulty={setDifficulty}/>
                </div>

                <div className="body bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
                    {question && <Question question={question} answerQuestion={handleQuestionAnswered} /> }
                </div>

                <div className="footer mt-2 border-t-2 w-full">
                    <button className={'text-center w-full bg-blue-900 hover:bg-blue-700 rounded-md text-white py-3 font-medium'} onClick={handleNextQuestion}>Next question</button>
                </div>
            </div>


        </div>
    )
}

export default Trivia;