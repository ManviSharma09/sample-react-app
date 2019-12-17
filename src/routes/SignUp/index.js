import React from "react";
import LoginSignUpTemplate from "../../components/LoginSignUpTemplate";

let SignUp = () => {
  const onSubmit = event => {
    console.log("event", event);
  };

  return <LoginSignUpTemplate formName="SignUp" onSubmit={onSubmit} />;
};

export default SignUp;
