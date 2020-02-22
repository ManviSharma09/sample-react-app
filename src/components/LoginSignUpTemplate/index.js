import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SpinnerModal from "../SpinnerModal";
import InputFieldForForm from "./InputFieldForForm";
import photo from "../../utils/images/wallpaper.jpg";
import defaultUser from "../../utils/images/defaultUser.webp";
import { signUpFormData, loginFormData } from "../../utils/constants";

const OuterDiv = styled.div`
  display: flex;
  align-items: flex-end;
  @media (max-width: 500px) {
    align-items: center;
  }
  justify-content: center;
  flex-direction: column;
  color: white;
  background-image: url(${photo});
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  overflow-y: scroll;
  overflow-x: scroll;
`;

const FormDiv = styled.div`
  margin-top: 50px;
  margin-right: 10%;
  @media (max-width: 500px) {
    margin-right: 0;
  }
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 30px;
  background-color: rgba(0, 0, 0, 0.25);
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
  outline: none;
  cursor: pointer;
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
  background-image: url(${defaultUser});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 1);
  font-style: italic;
  font-weight: bold;
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const StyledSpan = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

const LoginSignUpTemplate = ({ formName, onSubmit }) => {
  const formToShow = formName === "SignUp" ? signUpFormData : loginFormData;

  const { authSpinner } = useSelector(state => ({
    authSpinner: state.auth.authSpinner
  }));

  return (
    <OuterDiv>
      {authSpinner && (
        <SpinnerContainer>
          <SpinnerModal />
        </SpinnerContainer>
      )}

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
          <Button type="submit">Submit</Button>
        </form>
        {formName === "Login" ? (
          <StyledSpan>
            Do not have an account? <StyledLink to="/signup">SignUp</StyledLink>
          </StyledSpan>
        ) : (
          <StyledSpan>
            Already have an account? <StyledLink to="/login">Login</StyledLink>
          </StyledSpan>
        )}
      </FormDiv>
    </OuterDiv>
  );
};

export default LoginSignUpTemplate;
