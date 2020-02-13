import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import user from "../../utils/images/user.png";
import InputFieldForForm from "./InputFieldForForm";
import photo from "../../utils/images/wallpaper.jpg";
import ActivityIndicator from "../ActivityIndicator";
import { signUpFormData, loginFormData } from "../../utils/constants";

const OuterDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  color: white;
  background-image: url(${photo});
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
`;

const FormDiv = styled.div`
  margin-top: 50px;
  margin-right: 10%;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 30px;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledHeading = styled.h1`
  display: flex;
  justify-content: center;
  color: rgba(0, 0, 0, 0.9);
`;

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 1em;
  margin-top: 1em;
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

const ProfileDiv = styled.div`
  margin-right: 0px;
  height: 100px;
  margin-top: -50px;
`;

const PhotoDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-left: 80px;
  margin-right: 80px;
  border-radius: 50px;
  background-image: url(${user});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border: 2px solid;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  font-style: italic;
  font-weight: bold;
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const LoginSignUpTemplate = ({ formName, onSubmit }) => {
  const formToShow = formName === "SignUp" ? signUpFormData : loginFormData;

  return (
    <OuterDiv>
      <FormDiv>
        <ProfileDiv>
          <PhotoDiv />
        </ProfileDiv>
        <StyledHeading>{formName}</StyledHeading>
        <form onSubmit={onSubmit}>
          {formToShow.map(item => {
            return (
              <InputFieldForForm
                key={item.name}
                name={item.name}
                labelName={item.label}
                type={item.type}
                validate={item.validation}
              />
            );
          })}
          {useSelector(state =>
            state.auth.authSpinner === true ? (
              <SpinnerContainer>
                <ActivityIndicator />
              </SpinnerContainer>
            ) : null
          )}

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

export default LoginSignUpTemplate;
