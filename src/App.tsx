import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/styles/reset.css";
import GlobalStyle from "./assets/styles/global";

import Home from "./pages/home/Home";
import Course from "./pages/course/Course";
import Topbar from "./components/TopBar/TopBar";
import Teachers from "./pages/teachers/Teachers";
import Subjects from "./pages/subjects/Subjects";
import TestsBySubject from "./pages/testsBySubject/TestsBySubject";
import TestsByTeacher from "./pages/testsByTeacher/TestsByTeacher";
import SendTest from "./pages/sendTest/SendTest";

function App() {
    return (
        <Router>
            <GlobalStyle />
            <Topbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/course/:id" component={Course} />
                <Route exact path="/course/:courseId/teachers" component={Teachers} />
                <Route exact path="/course/:courseId/subjects" component={Subjects} />
                <Route exact path="/subject/:subjectId/tests" component={TestsBySubject} />
                <Route exact path="/teacher/:teacherId/tests" component={TestsByTeacher} />
                <Route exact path="/send-test" component={SendTest} />
            </Switch>
        </Router>
    );
}

export default App;
