
const Header = (props) => {

    return (
        <header className="flex justify-between items-center mb-2 w-full">
            <div className="flex flex-row justify-start px-4 sm:px-6 w-full">
                <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
                    <div>
                        <button onClick={props.addPomodoro}>Pomodoro</button>
                    </div>
                    <div>
                        <button onClick={props.addEditor}>Markdown editor</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;