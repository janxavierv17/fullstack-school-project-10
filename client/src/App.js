import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from "./Components/Header";
import Courses from "./Components/Courses";
import Forbidden from "./Components/Forbidden"
import NotFound from "./Components/NotFound";
import UserSignUp from "./Components/UserSignUp";
import UserSignIn from "./Components/UserSignIn";
import CreateCourse from "./Components/CreateCourse"
import UpdateCourse from "./Components/UpdateCourse"
import CourseDetails from "./Components/CourseDetail";

import withContext from "./Context"
import PrivateRoute from "./PrivateRoute"

const HeaderWithContext = withContext(Header)
const userSignUpWithContext = withContext(UserSignUp)
const userSignInWithContext = withContext(UserSignIn)
const createCourseWithContext = withContext(CreateCourse)
const updateCourseWithContext = withContext(UpdateCourse)


function App() {
  return (
    <Router >
      <HeaderWithContext />
      <Switch>
        <Route exact path="/" component={Courses} />
        <Route path="/signin" component={userSignInWithContext} />
        <Route path="/signup" component={userSignUpWithContext} />
        <Route exact path="/courses/:id" component={CourseDetails} />
        <PrivateRoute path="/course/create" component={createCourseWithContext} />
        <PrivateRoute path="/courses/:id/update" component={updateCourseWithContext} />
        <Route path="/forbidden" component={Forbidden} />
        <Route path="/not-found" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
