import React from "react";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { formConstants } from "../../utils/constants";
import { signUpRequest } from "../../redux/actions/authActions";
import LoginSignUpTemplate from "../../components/LoginSignUpTemplate";

let SignUp = props => {
  const { handleSubmit } = props;
  return <LoginSignUpTemplate formName="SignUp" onSubmit={handleSubmit} />;
};

const onSubmit = (event, dispatch) => {
  dispatch(signUpRequest(event));
};
SignUp = reduxForm({ form: formConstants.signUpFormConst, onSubmit })(SignUp);
export default withRouter(SignUp);
