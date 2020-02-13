import React from "react";
import { reduxForm } from "redux-form";
import { formConstants } from "../../utils/constants";
import { loginRequest } from "../../redux/actions/authActions";
import LoginSignUpTemplate from "../../components/LoginSignUpTemplate";

let Login = props => {
  const { handleSubmit } = props;
  return <LoginSignUpTemplate formName="Login" onSubmit={handleSubmit} />;
};
const onSubmit = (event, dispatch) => {
  dispatch(loginRequest(event));
};
Login = reduxForm({
  form: formConstants.loginFormConst,
  onSubmit
})(Login);
export default Login;
