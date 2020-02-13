import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import settingsIcon from "../../utils/images/settingsIcon.svg";

const HeaderDiv = styled.div`
  height: 60px;
  background-color: #cff89d;
`;

const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
  float: right;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
`;

const Header = () => {
  const dispatch = useDispatch();
  return (
    <HeaderDiv>
      <StyledIcon
        src={settingsIcon}
        alt="settings icon"
        onClick={() => {
          console.log("Entered here");
          dispatch({ type: "SIGN_OUT" });
        }}
      ></StyledIcon>
    </HeaderDiv>
  );
};
export default Header;
