import Pomodoro from "./components/Pomodoro";
import MarkdownEditor from "./components/MarkdownEditor";
import Header from "./components/Header";
import BrowserTabs from "./components/BrowserTabs";
import Game from "./components/Game";
import Link from "./components/Link";
import ImageGallery from "./components/ImageGallery";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Trivia from "./components/Trivia";
import Calendar from "./components/Calendar";
import Speech from "./components/Speech";
import Message from "./components/Message";
import SignupForm from "./components/SignupForm/SignupForm";
import MemoryGame from "./components/MemoryGame";

function App() {

    return (
        <div className="h-screen flex flex-col">
            <Router>

                <Header />

                <Switch>
                    <Route exact path="/" component={Pomodoro}/>

                    <Route path="/editor" component={MarkdownEditor}/>

                    <Route path="/tabs" component={BrowserTabs}/>

                    <Route path="/game" component={Game}/>

                    <Route path="/link" component={Link}/>

                    <Route path="/gallery" component={ImageGallery}/>

                    <Route path="/trivia" component={Trivia}/>

                    <Route path="/speech" component={Speech}/>

                    <Route path="/calendar" component={Calendar}/>

                    <Route path="/message" component={Message}/>

                    <Route path="/form" component={SignupForm}/>

                    <Route path="/memory" component={MemoryGame}/>
                </Switch>

            </Router>
        </div>
    )
}

export  default App;