const ResultModal = () => {
    return (
        <div>
            <div className="overlay" />
            <div className="result-modal">
                <h3>
                    YOU WON
                </h3>
                <h3>
                    YOU LOST
                </h3>

                <div>
                    <small>The correct answer was:</small>
                    <br/>
                    <strong>Answer here</strong>
                </div>

                <button>Go to next question</button>
            </div>
        </div>
    )
}

export default ResultModal;