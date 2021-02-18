import { useState } from 'react'
import Pomodoro from "./components/Pomodoro";
import MarkdownEditor from "./components/MarkdownEditor";
import Header from "./components/Header";
import BrowserTabs from "./components/BrowserTabs";
import Game from "./components/Game";
import Link from "./components/Link";
import ImageGallery from "./components/ImageGallery";

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

    function galleryState() {
        setState('gallery')
    }

    return (
        <div>
            <Header addEditor={ markdownState }
                    addPomodoro={pomodoroState}
                    addTabs={tabsState}
                    addGame={gameState}
                    addLink={linkState}
                    addImageGallery={galleryState} />

            {state === 'pomodoro' && (<Pomodoro />)}

            {state === 'markdown' && <MarkdownEditor />}

            {state === 'tabs' && <BrowserTabs />}

            {state === 'game' && <Game />}

            {state === 'link' && <Link />}

            {state === 'gallery' && <ImageGallery /> }
        </div>
    )
}

export  default App;