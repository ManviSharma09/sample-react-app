import React from "react";
import styled from "styled-components";
import { Field, reduxForm } from "redux-form";

const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

const LoginSignUpTemplate = ({ route }) => {
  return (
    <OuterDiv>
      <h1>{route}</h1>
    </OuterDiv>
  );
};

export default LoginSignUpTemplate;
