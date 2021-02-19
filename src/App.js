import Pomodoro from "./components/Pomodoro";
import MarkdownEditor from "./components/MarkdownEditor";
import Header from "./components/Header";
import BrowserTabs from "./components/BrowserTabs";
import Game from "./components/Game";
import Link from "./components/Link";
import ImageGallery from "./components/ImageGallery";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {

    return (
        <div>
            <Router>

                <Header />

                <Switch>
                    <Route exact path="/" component={Pomodoro}/>

                    <Route path="/editor" component={MarkdownEditor}/>

                    <Route path="/tabs" component={BrowserTabs}/>

                    <Route path="/game" component={Game}/>

                    <Route path="/link" component={Link}/>

                    <Route path="/gallery" component={ImageGallery}/>
                </Switch>

            </Router>
        </div>
    )
}

export  default App;