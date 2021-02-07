import { useState } from 'react'
import Pomodoro from "./Pomodoro";
import MarkdownEditor from "./MarkdownEditor";
import Header from "./Header";
import BrowserTabs from "./BrowserTabs";

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

    return (
        <div>
            <Header addEditor={ markdownState }
                    addPomodoro={pomodoroState}
                    addTabs={tabsState} />

            {state === 'pomodoro' && (<Pomodoro />)}

            {state === 'markdown' && <MarkdownEditor />}

            {state === 'tabs' && <BrowserTabs />}
        </div>
    )
}

export  default App;