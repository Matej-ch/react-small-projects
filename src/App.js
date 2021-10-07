import Pomodoro from "./components/Pomodoro";
import MarkdownEditor from "./components/MarkdownEditor";
import Header from "./components/Header";
import Game from "./components/Game";
import Link from "./components/Link";
import ImageGallery from "./components/ImageGallery";
import {Switch, Route, HashRouter} from "react-router-dom"
import Trivia from "./components/Trivia";
import Calendar from "./components/Calendar";
import Speech from "./components/Speech";
import Message from "./components/Message";
import SignupForm from "./components/SignupForm/SignupForm";
import MemoryGame from "./components/MemoryGame";
import MathGame from "./components/MathGame";
import TypingTester from "./components/TypingTester";
import Clock from "./components/Clock";

function App() {

    return (
        <div className="h-screen flex flex-col">

            <HashRouter basename='/'>
                <Header />

                <Switch>
                    <Route exact path="/" component={Pomodoro}/>

                    <Route exac path="/editor" component={MarkdownEditor}/>

                    <Route exac path="/game" component={Game}/>

                    <Route exac path="/link" component={Link}/>

                    <Route exac path="/gallery" component={ImageGallery}/>

                    <Route exac path="/trivia" component={Trivia}/>

                    <Route exac path="/speech" component={Speech}/>

                    <Route exac path="/calendar" component={Calendar}/>

                    <Route exac path="/clock" component={Clock}/>

                    <Route exac path="/message" component={Message}/>

                    <Route exac path="/form" component={SignupForm}/>

                    <Route exac path="/memory" component={MemoryGame}/>

                    <Route exac path="/math" component={MathGame}/>

                    <Route exac path="/typing" component={TypingTester}/>
                </Switch>
            </HashRouter>
        </div>
    )
}

export  default App;