
const Header = (props) => {

    return (
        <header className="flex justify-between items-center w-full">
            <div className="flex flex-row justify-start px-4 sm:px-6 w-full">
                <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
                    <div>
                        <button className="font-semibold" onClick={props.addPomodoro}>Pomodoro</button>
                    </div>
                    <div>
                        <button className="font-semibold" onClick={props.addEditor}>Markdown editor</button>
                    </div>
                    <div>
                        <button  className="font-semibold" onClick={props.addTabs}>Tabs</button>
                    </div>

                    <div>
                        <button  className="font-semibold" onClick={props.addGame}>Rock/Paper/Scissors</button>
                    </div>

                    <div>
                        <button  className="font-semibold" onClick={props.addLink}>Link</button>
                    </div>

                    <div>
                        <button  className="font-semibold" onClick={props.addImageGallery}>Image gallery</button>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;