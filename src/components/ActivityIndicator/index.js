import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
   0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }`;

const SpinnerDiv = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #f4e14b;
  border-bottom: 5px solid #f4e14b;
  width: 30px;
  height: 30px;
  animation: ${spin} 1s linear infinite;
`;
const ActivityIndicator = () => {
  return <SpinnerDiv />;
};
export default ActivityIndicator;
