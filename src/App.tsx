import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/styles/reset.css";
import GlobalStyle from "./assets/styles/global";

import Home from "./pages/home/Home";
import Topbar from "./components/TopBar/TopBar";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Topbar />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
