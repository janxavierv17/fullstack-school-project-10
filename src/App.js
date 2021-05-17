import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from "./Components/Header";
import Courses from "./Components/Courses";
import UserSignUp from "./Components/UserSignUp";
import UserSignIn from "./Components/UserSignIn";
import CreateCourse from "./Components/CreateCourse"
import CourseDetails from "./Components/CourseDetail";

import withContext from "./Context"

const HeaderWithContext = withContext(Header)
const userSignUpWithContext = withContext(UserSignUp)
const userSignInWithContext = withContext(UserSignIn)
const createCourseWithContext = withContext(CreateCourse)

function App() {
  return (
    <Router >
      <HeaderWithContext />
      <Switch>
        <Route path="/" component={Courses} exact />
        <Route path="/signin" component={userSignInWithContext} />
        <Route path="/signup" component={userSignUpWithContext} />
        <Route path="/courses/:id" component={CourseDetails} />
        <Route path="/createcourse" component={createCourseWithContext} />
      </Switch>
    </Router>
  );
}

export default App;
