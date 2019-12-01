import React from "react";
import LoginSignUpTemplate from "../components/LoginSignUpTemplate";
import { reduxForm } from "redux-form";

let Login = () => {
  return <LoginSignUpTemplate route="Login" />;
};

Login = reduxForm({
  form: "Login"
})(Login);
export default Login;
