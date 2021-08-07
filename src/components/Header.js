import {Nav, NavLink, Bars, NavMenu} from './NavbarParts';

const Header = () => {

    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink exact to='/'>Pomodoro</NavLink>

                    <NavLink exact to='/editor'>Markdown editor</NavLink>

                    <NavLink exact to='/game'>Rock/Paper/Scissors</NavLink>

                    <NavLink exact to="/link">Link</NavLink>

                    <NavLink exact to="/gallery">Image gallery</NavLink>

                    <NavLink exact to="/trivia">Trivia</NavLink>

                    <NavLink exact to="/speech">Speech</NavLink>

                    <NavLink exact to="/calendar">Calendar</NavLink>

                    <NavLink exact to="/message">Vis. messages</NavLink>

                    <NavLink exact to="/form/profile">Form</NavLink>

                    <NavLink exact to="/memory">Memory game</NavLink>

                    <NavLink exact to="/math">Math cards</NavLink>

                    <NavLink exact to="/typing">Typing</NavLink>

                </NavMenu>
            </Nav>
        </>
    )
}

export default Header;