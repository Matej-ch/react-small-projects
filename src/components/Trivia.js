import CategorySelector from "./CategorySelector";
import Scoreboard from "./Scoreboard";
import Question from "./Question";
import ResultModal from "./ResultModal";


const Trivia = () => {
    return (
        <div className="pomodoro flex flex-col justify-center w-full h-full items-center space-y-2 bg-yellow-100">


            {/* <ResultModal/>*/}

            <div className="header">
                <CategorySelector/>
                <Scoreboard />
            </div>

            <div className="body">
                <Question />
            </div>

            <div className="footer">
                <button>Next question</button>
            </div>
        </div>
    )
}

export default Trivia;