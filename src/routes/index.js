import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import PhotoDashboard from "./PhotoDashboard";
import Profile from "./Profile";

const PrivateRoute = ({ component: Component, ...props }) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  console.log("token", token);
  return (
    <Route
      {...props}
      render={() => {
        if (token === true || token === "true") {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

const NonPrivateRoute = ({ component: Component, ...props }) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  return (
    <Route
      {...props}
      render={() => {
        if (token !== true && token !== "true") {
          return <Component {...props} />;
        } else {
          return <Redirect to="/photoDashboard" />;
        }
      }}
    />
  );
};
const AppRoutes = () => {
  return (
    <Switch>
      <NonPrivateRoute exact path="/" component={Login} />
      <NonPrivateRoute exact path="/login" component={Login} />
      <NonPrivateRoute exact path="/signUp" component={SignUp} />
      <PrivateRoute exact path="/photoDashboard" component={PhotoDashboard} />
      <PrivateRoute exact path="/profile" component={Profile} />
    </Switch>
  );
};
export default AppRoutes;
