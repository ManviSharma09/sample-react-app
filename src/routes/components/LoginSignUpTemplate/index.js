import React from "react";
import styled from "styled-components";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import photo from "../../../utils/images/wallpaper.jpg";
import { Link } from "react-router-dom";

const OuterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #a20b48;
  background-image: url(${photo});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  right: 0;
  left: 0;
`;

const FormDiv = styled.div`
  align-self: flex-start;
  padding-left: 100px;
`;

const Button = styled.button`
  background: #a20b48;
  color: white;
  font-size: 1em;
  margin-top: 2em;
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 2em;
  padding: 0.25em 1em;
  border: 2px solid #a20b48;
  border-radius: 5px;
  width: 225px;
  height: 50px;
  align-self: center;
  &:hover {
    background: white;
    color: #a20b48;
  }
`;

const Label = styled.label`
  font-size: 20px;
`;

const FormEntryDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Input = styled.input`
  width: 250px;
  height: 25px;

  border-radius: 5px;
  &:focus {
    border-color: #a20b48;
    outline: none;
  }
  &:hover {
    background-color: #a20b48;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #a20b48;
`;

const LoginSignUpTemplate = ({ formName, handleSubmit }) => {
  const renderField = ({ input, type }) => (
    <div>
      <Input {...input} type={type} />
    </div>
  );

  return (
    <OuterDiv>
      <FormDiv>
        <h1>{formName}</h1>
        <form onSubmit={handleSubmit}>
          {formName === "SignUp" ? (
            <FormEntryDiv>
              <Label htmlFor="firstName">First Name</Label>
              <Field name="firstName" component={renderField} type="text" />
            </FormEntryDiv>
          ) : null}
          {formName === "SignUp" ? (
            <FormEntryDiv>
              <Label htmlFor="lastName">Last Name</Label>
              <Field name="lastName" component={renderField} type="text" />
            </FormEntryDiv>
          ) : null}

          <FormEntryDiv>
            <Label htmlFor="email">Email</Label>
            <Field name="email" component={renderField} type="email" />
          </FormEntryDiv>
          <FormEntryDiv>
            <Label htmlFor="password">Password</Label>
            <Field name="password" component={renderField} type="password" />
          </FormEntryDiv>
          {formName === "SignUp" ? (
            <FormEntryDiv>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Field
                name="confirmPassword"
                component={renderField}
                type="password"
              />
            </FormEntryDiv>
          ) : null}

          <Button type="submit">Submit</Button>
        </form>
        {formName === "Login" ? (
          <StyledLink to="/signup">
            Signup,if you do not have an account
          </StyledLink>
        ) : (
          <StyledLink to="/login">
            Login,if you already have an account
          </StyledLink>
        )}
      </FormDiv>
    </OuterDiv>
  );
};

export default reduxForm({
  form: "signUpLoginForm"
})(LoginSignUpTemplate);
