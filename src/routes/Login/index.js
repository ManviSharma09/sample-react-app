import React from "react";
import LoginSignUpTemplate from "../../components/LoginSignUpTemplate";
import { reduxForm } from "redux-form";
import { formConstants } from "../../utils/constants";

let Login = props => {
  const { handleSubmit } = props;
  return <LoginSignUpTemplate formName="Login" onSubmit={handleSubmit} />;
};
const onSubmit = (event, dispatch) => {
  dispatch({ type: "LOGIN_REQUEST", payload: event });
};
Login = reduxForm({
  form: formConstants.loginFormConst,
  onSubmit
})(Login);
export default Login;
