const Scoreboard = ({correct, wrong}) => {
    return (
        <div className="scoreboard">
            <div className="text-red-500">
                <span className="font-bold">{correct}</span>
                <span>wrong</span>
            </div>
            <div className="text-green-500">
                <span className="font-bold">{wrong}</span>
                <span>correct</span>
            </div>
        </div>
    )
}

export default Scoreboard;