const Scoreboard = () => {
    return (
        <div className="scoreboard">
            <div className="text-red-500">
                <span className="font-bold">0</span>
                <span>wrong</span>
            </div>
            <div className="text-green-500">
                <span className="font-bold">0</span>
                <span>correct</span>
            </div>
        </div>
    )
}

export default Scoreboard;