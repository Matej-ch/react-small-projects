const Scoreboard = ({correct, wrong}) => {
    return (
        <div className="scoreboard flex flex-row pb-2 justify-between px-2">
            <div className="text-green-500">
                <span className="font-bold text-xl">{correct}</span>
                <span> correct</span>
            </div>
            <div className="text-red-500">
                <span className="font-bold text-xl">{wrong}</span>
                <span> wrong</span>
            </div>
        </div>
    )
}

export default Scoreboard;