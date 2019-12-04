import React from "react";
import styled from "styled-components";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import photo from "../../utils/images/wallpaper.jpg";
import { Link } from "react-router-dom";

const OuterDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  color: #f9fcfa;
  background-image: url(${photo});
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
`;

const FormDiv = styled.div`
  margin-right: 10%;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 30px;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const Button = styled.button`
  background: #8d913f;
  color: white;
  font-size: 1em;
  margin-top: 2em;
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 2em;
  padding: 0.25em 1em;
  border: 2px solid #8d913f;
  border-radius: 5px;
  width: 225px;
  height: 50px;
  align-self: center;
  &:hover {
    background: white;
    color: #8d913f;
  }
`;

const Label = styled.label`
  font-size: 15px;
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
    border-color: #efe493;
    outline: none;
    background-color: #efe493;
  }
  &:hover {
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #f9fcfa;
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
          <StyledLink to="/signup">Do not have an account? SignUp</StyledLink>
        ) : (
          <StyledLink to="/login">Already have an account? Login</StyledLink>
        )}
      </FormDiv>
    </OuterDiv>
  );
};

export default reduxForm({
  form: "signUpLoginForm"
})(LoginSignUpTemplate);
