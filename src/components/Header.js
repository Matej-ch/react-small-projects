import {Nav, NavLink, Bars, NavMenu} from './NavbarParts';

const Header = () => {

    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Pomodoro
                    </NavLink>
                    <NavLink to='/editor' activeStyle>
                        Markdown editor
                    </NavLink>
                    <NavLink to='/tabs' activeStyle>
                        Tabs
                    </NavLink>
                    <NavLink to='/game' activeStyle>
                        Rock/Paper/Scissors
                    </NavLink>

                        <NavLink to="/link" activeStyle>Link</NavLink>

                        <NavLink to="/gallery" activeStyle>Image gallery</NavLink>

                        <NavLink to="/trivia" activeStyle>Trivia</NavLink>

                        <NavLink to="/speech" activeStyle>Speech</NavLink>

                        <NavLink to="/calendar" activeStyle>Calendar</NavLink>

                        <NavLink to="/message" activeStyle>Vis. messages</NavLink>

                        <NavLink to="/form/signup" activeStyle>Form</NavLink>

                        <NavLink to="/memory" activeStyle>Memory game</NavLink>

                        <NavLink to="/math" activeStyle>Math cards</NavLink>

                        <NavLink to="/typing" activeStyle>Typing</NavLink>

                </NavMenu>
            </Nav>
        </>
    )
}

export default Header;