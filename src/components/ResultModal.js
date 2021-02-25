const ResultModal = ({isCorrect,question,getQuestion}) => {
    return (
        <div>
            <div className="overlay" />
            <div className="result-modal">

                {isCorrect &&<h3>YOU WON</h3>}

                {!isCorrect && <h3>YOU LOST</h3>}

                {!isCorrect && (
                    <div>
                        <small>The correct answer was:</small>
                        <br/>
                        <strong dangerouslySetInnerHTML={{__html:question.correct_answer }} />
                    </div>
                )}


                <button onClick={getQuestion}>Go to next question</button>
            </div>
        </div>
    )
}

export default ResultModal;