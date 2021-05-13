import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./Components/Header";
import Courses from "./Components/Courses";
import CourseDetails from "./Components/CourseDetail";


function App() {
  return (
    <Router >
      <Header />
      <Switch>
        <Route path="/" component={Courses} exact />
        <Route path="/courses/:id" component={CourseDetails} />
      </Switch>
    </Router>
  );
}

export default App;
