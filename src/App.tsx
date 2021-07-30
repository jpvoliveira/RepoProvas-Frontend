import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/styles/reset.css";
import GlobalStyle from "./assets/styles/global";

import Home from "./pages/home/Home";
import Course from "./pages/course/Course";
import Topbar from "./components/TopBar/TopBar";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Topbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/course/:id" component={Course} />
            </Switch>
        </Router>
    );
}

export default App;
