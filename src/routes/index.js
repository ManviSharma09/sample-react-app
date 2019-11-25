import React from "react";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import Login from "./Login";
import PhotoDashboard from "./PhotoDashboard";
import About from "./About";
import SignUp from "./SignUp";

const AppRoutes = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};
export default AppRoutes;
