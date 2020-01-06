import React from "react";
import {withRouter} from "react-router-dom";
import LoginSignUpTemplate from "../../components/LoginSignUpTemplate";
import { withFirebase } from "../../components/Firebase";

let SignUp = (props) => {
  const onSubmit = event => {
    console.log("event", event,"props",props);
    const {firstName,lastName,email,password}=event;
    props.firebase.doCreateUserWithEmailAndPasword(email,password)
    .then(authUser =>{
      props.history.push("/photodashboard");
    }).catch(error=>{
      console.log("error",error)
    })
  };

  return <LoginSignUpTemplate formName="SignUp" onSubmit={onSubmit} />;
};

export default withRouter(withFirebase(SignUp));
