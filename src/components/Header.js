import {Link} from "react-router-dom";
const Header = (props) => {

    return (
        <header className="flex justify-between items-center w-full">
            <div className="flex flex-row justify-start px-4 sm:px-6 w-full">
                <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
                    <div>
                        <Link to="/" className="font-semibold">Pomodoro</Link>
                    </div>
                    <div>
                        <Link to="/editor" className="font-semibold">Markdown editor</Link>
                    </div>
                    <div>
                        <Link to="/tabs" className="font-semibold">Tabs</Link>
                    </div>

                    <div>
                        <Link to="/game" className="font-semibold" >Rock/Paper/Scissors</Link>
                    </div>

                    <div>
                        <Link to="/link" className="font-semibold">Link</Link>
                    </div>

                    <div>
                        <Link to="/gallery" className="font-semibold">Image gallery</Link>
                    </div>

                    <div>
                        <Link to="/trivia" className="font-semibold">Trivia</Link>
                    </div>

                    <div>
                        <Link to="/speech" className="font-semibold">Speech</Link>
                    </div>

                    <div>
                        <Link to="/calendar" className="font-semibold">Calendar</Link>
                    </div>

                    <div>
                        <Link to="/message" className="font-semibold">Vis. messages</Link>
                    </div>

                    <div>
                        <Link to="/form/signup" className="font-semibold">Form</Link>
                    </div>

                    <div>
                        <Link to="/memory" className="font-semibold">Memory game</Link>
                    </div>

                    <div>
                        <Link to="/math" className="font-semibold">Math cards</Link>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;