import {Nav, NavLink, Bars, NavMenu} from './NavbarParts';

const Header = () => {

    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink exact to='/'>Pomodoro</NavLink>

                    <NavLink to='/editor'>Markdown editor</NavLink>

                    <NavLink to='/game'>Rock/Paper/Scissors</NavLink>

                    <NavLink to="/link">Link</NavLink>

                    <NavLink to="/gallery">Image gallery</NavLink>

                    <NavLink to="/trivia">Trivia</NavLink>

                    <NavLink to="/speech">Speech</NavLink>

                    <NavLink to="/calendar">Calendar</NavLink>

                    <NavLink to="/message">Vis. messages</NavLink>

                    <NavLink to="/form/profile">Form</NavLink>

                    <NavLink to="/memory">Memory game</NavLink>

                    <NavLink to="/math">Math cards</NavLink>

                    <NavLink to="/typing">Typing</NavLink>

                </NavMenu>
            </Nav>
        </>
    )
}

export default Header;