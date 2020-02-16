import React from "react";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import { formConstants } from "../../utils/constants";
import { signUpRequest } from "../../actions/authActions";
import LoginSignUpTemplate from "../../components/LoginSignUpTemplate";

let SignUp = props => {
  const { handleSubmit } = props;
  return <LoginSignUpTemplate formName="SignUp" onSubmit={handleSubmit} />;
};

const onSubmit = (values, dispatch) => {
  dispatch(signUpRequest(values));
};
SignUp = reduxForm({ form: formConstants.signUpFormConst, onSubmit })(SignUp);
export default withRouter(SignUp);
