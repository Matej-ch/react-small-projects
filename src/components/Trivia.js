import CategorySelector from "./CategorySelector";
import Scoreboard from "./Scoreboard";
import Question from "./Question";
import ResultModal from "./ResultModal";
import {useEffect,useState,useCallback} from "react";


const Trivia = () => {

    const [question,setQuestion] = useState(null);
    const [selectedCategory,setSelectedCategory] = useState('any');
    const [isCorrect,setIsCorrect] = useState(null);
    const [correctScore, setCorrectScore] = useState(0);
    const [wrongScore, setWrongScore] = useState(0);

    const getQuestion = useCallback(() => {
        setIsCorrect(null);
        let url = 'https://opentdb.com/api.php?amount=1';
        if(selectedCategory !== 'any') {
            url += `&category=${selectedCategory}`;
        }
        fetch(url).then(res => res.json()).then(data => {setQuestion(data.results[0])});
    },[selectedCategory])

    useEffect(() => {
        getQuestion();
    },[getQuestion,selectedCategory])

    function handleQuestionAnswered(answer) {
        const isAnswerCorrect = answer === question.correct_answer;
        setIsCorrect(isAnswerCorrect);

        if(isAnswerCorrect) setCorrectScore(score =>score+1);
        if(!isAnswerCorrect) setWrongScore(score =>score+1);
    }

    return (
        <div className="pomodoro flex flex-col justify-center w-full h-full items-center space-y-2 bg-yellow-100">

            {isCorrect !== null && <ResultModal isCorrect = {isCorrect} question={question} getQuestion={getQuestion}/>}

            <div className="header">
                <CategorySelector category={selectedCategory} chooseCategory={setSelectedCategory}/>
                <Scoreboard correct={correctScore} wrong={wrongScore}/>
            </div>

            <div className="body">
                {question && <Question question={question} answerQuestion={handleQuestionAnswered} /> }
            </div>

            <div className="footer">
                <button onClick={getQuestion}>Next question</button>
            </div>
        </div>
    )
}

export default Trivia;