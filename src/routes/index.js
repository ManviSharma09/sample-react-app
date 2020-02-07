import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import PhotoDashboard from "./PhotoDashboard";
import About from "./About";

const AppRoutes = props => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signUp">
        <SignUp />
      </Route>
      <Route exact path="/photoDashboard">
        <PhotoDashboard />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </Switch>
  );
};
export default AppRoutes;
