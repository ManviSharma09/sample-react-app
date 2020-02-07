import React from "react";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { formConstants } from "../../utils/constants";
import LoginSignUpTemplate from "../../components/LoginSignUpTemplate";

let SignUp = props => {
  const { handleSubmit } = props;
  return <LoginSignUpTemplate formName="SignUp" onSubmit={handleSubmit} />;
};

const onSubmit = (event, dispatch) => {
  dispatch({ type: "SIGN_UP_REQUEST", payload: event });
};
SignUp = reduxForm({ form: formConstants.signUpFormConst, onSubmit })(SignUp);
export default withRouter(SignUp);
