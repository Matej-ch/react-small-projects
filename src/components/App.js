import { useState } from 'react'
import Pomodoro from "./Pomodoro";
import MarkdownEditor from "./MarkdownEditor";
import Header from "./Header";

function App() {
    const [state, setState] = useState('pomodoro')

    function markdownState() {
        setState('markdown')
    }

    function pomodoroState() {
        setState('pomodoro');
    }

    return (
        <div>
            <Header addEditor={ markdownState }
                    addPomodoro={pomodoroState} />

            {state === 'pomodoro' && (<Pomodoro />)}

            {state === 'markdown' && <MarkdownEditor />}
        </div>
    )
}

export  default App;