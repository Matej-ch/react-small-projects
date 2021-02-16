import { useState } from 'react'
import Pomodoro from "./components/Pomodoro";
import MarkdownEditor from "./components/MarkdownEditor";
import Header from "./components/Header";
import BrowserTabs from "./components/BrowserTabs";
import Game from "./components/Game";
import Link from "./components/Link";

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

    function linkState() {
        setState('link');
    }

    return (
        <div>
            <Header addEditor={ markdownState }
                    addPomodoro={pomodoroState}
                    addTabs={tabsState}
                    addGame={gameState}
                    addLink={linkState} />

            {state === 'pomodoro' && (<Pomodoro />)}

            {state === 'markdown' && <MarkdownEditor />}

            {state === 'tabs' && <BrowserTabs />}

            {state === 'game' && <Game />}

            {state === 'link' && <Link />}
        </div>
    )
}

export  default App;