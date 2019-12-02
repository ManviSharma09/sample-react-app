import React from "react";
import styled from "styled-components";
import { Field } from "redux-form";
import { formConstants } from "../../../utils/constants";
import { reduxForm } from "redux-form";

const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
`;

const LoginSignUpTemplate = props => {
  return (
    <OuterDiv>
      <h1>{props.formName}</h1>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </OuterDiv>
  );
};

export default reduxForm({
  form: "signUpLoginForm"
})(LoginSignUpTemplate);
