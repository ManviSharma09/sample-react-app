import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LoginSignUpTemplate from "../../components/LoginSignUpTemplate";

let SignUp = props => {
  const handleSubmit = event => {
    props.signUpRequest(event);
  };
  return <LoginSignUpTemplate formName="SignUp" onSubmit={handleSubmit} />;
};

const mapDispatchToProps = dispatch => {
  return {
    signUpRequest: value =>
      dispatch({ type: "SIGN_UP_REQUEST", payload: value })
  };
};
export default connect(null, mapDispatchToProps)(withRouter(SignUp));
