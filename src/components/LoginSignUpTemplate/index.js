import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { reduxForm } from "redux-form";
import photo from "../../utils/images/wallpaper.jpg";
import { Link } from "react-router-dom";
import { signUpFormData, loginFormData } from "../../utils/constants";
import InputFieldForForm from "./InputFieldForForm";

const OuterDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
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

const StyledHeading = styled.h1`
  color: rgba(0, 0, 0, 0.9);
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 1em;
  margin-top: 2em;
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 2em;
  padding: 0.25em 1em;
  border: 2px rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  width: 225px;
  height: 45px;
  align-self: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  font-style: italic;
  font-weight: bold;
`;

const LoginSignUpTemplate = ({ formName, handleSubmit }) => {
  const [formToShow, updateFormToShow] = useState([]);
  useEffect(() => {
    const formToShow = formName === "SignUp" ? signUpFormData : loginFormData;
    updateFormToShow(formToShow);
  }, [formName]);

  return (
    <OuterDiv>
      <FormDiv>
        <StyledHeading>{formName}</StyledHeading>
        <form onSubmit={handleSubmit}>
          {formToShow.map(item => {
            return (
              <InputFieldForForm
                key={item.name}
                name={item.name}
                labelName={item.label}
                type={item.type}
              />
            );
          })}

          <Button type="submit">Submit</Button>
        </form>
        {formName === "Login" ? (
          <span>
            Do not have an account? <StyledLink to="/signup">SignUp</StyledLink>
          </span>
        ) : (
          <span>
            Already have an account? <StyledLink to="/login">Login</StyledLink>
          </span>
        )}
      </FormDiv>
    </OuterDiv>
  );
};

export default reduxForm({
  form: "signUpLoginForm"
})(LoginSignUpTemplate);
