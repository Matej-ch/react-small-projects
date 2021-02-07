import { useState } from 'react'
import Pomodoro from "./components/Pomodoro";
import MarkdownEditor from "./components/MarkdownEditor";
import Header from "./components/Header";
import BrowserTabs from "./components/BrowserTabs";
import Game from "./components/Game";

function App() {
    const [state, setState] = useState('pomodoro')

    function markdownState() {
        setState('markdown')
    }

    function pomodoroState() {
        setState('pomodoro');
    }

    function tabsState() {
        setState('tabs');
    }

    function gameState() {
        setState('game');
    }

    return (
        <div>
            <Header addEditor={ markdownState }
                    addPomodoro={pomodoroState}
                    addTabs={tabsState}
                    addGame={gameState} />

            {state === 'pomodoro' && (<Pomodoro />)}

            {state === 'markdown' && <MarkdownEditor />}

            {state === 'tabs' && <BrowserTabs />}

            {state === 'game' && <Game />}


        </div>
    )
}

export  default App;