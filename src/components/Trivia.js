import CategorySelector from "./CategorySelector";
import Scoreboard from "./Scoreboard";
import Question from "./Question";
import ResultModal from "./ResultModal";
import {useState} from "react";
import useTrivia from "../hooks/useTrivia";


const Trivia = () => {

    const {question,getQuestion,category,setCategory} = useTrivia();

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

            {isCorrect !== null && <ResultModal isCorrect = {isCorrect} question={question} getQuestion={handleNextQuestion}/>}

            <div className="header">
                <CategorySelector category={category} chooseCategory={setCategory}/>
                <Scoreboard correct={correctScore} wrong={wrongScore}/>
            </div>

            <div className="body">
                {question && <Question question={question} answerQuestion={handleQuestionAnswered} /> }
            </div>

            <div className="footer">
                <button onClick={handleNextQuestion}>Next question</button>
            </div>
        </div>
    )
}

export default Trivia;