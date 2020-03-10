import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import CustomDropDown from "../CustomDropDown";
import userIcon from "../../utils/images/user.png";
import { dropDownItems } from "./dropdownConstants";
import { signOutRequest } from "../../actions/authActions";
import settingsIcon from "../../utils/images/settingsIcon.svg";

const HeaderDiv = styled.div`
  height: 60px;
  background-color: #2b2621;
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.p`
  color: white;
  font-size: 15px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-weight: bold;
`;

const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const ImgDiv = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
`;
const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Header = props => {
  const dispatch = useDispatch();
  const { userDetails } = props;
  const [userName, updateUserName] = useState("");
  const [photoUrl, updatePhotoUrl] = useState("");
  const [dropDownOpen, updateDropDownOpen] = useState(false);

  useEffect(() => {
    const name = userDetails.displayName;
    updateUserName(name);
    let photoLink = userDetails.photoUrl;
    if (!photoLink) {
      photoLink = userIcon;
    }
    updatePhotoUrl(photoLink);
  }, [userDetails]);

  return (
    <HeaderDiv>
      <Name>{userName}</Name>
      <StyledIcon
        src={settingsIcon}
        alt="settings icon"
        onClick={() => {
          dispatch(signOutRequest());
        }}
      ></StyledIcon>
      <CustomDropDown
        faceComponent={
          <ImgDiv
            onClick={() => {
              updateDropDownOpen(!dropDownOpen);
            }}
          >
            <StyledImage src={photoUrl} alt="profile-pic" />
          </ImgDiv>
        }
        dataList={dropDownItems}
      />
    </HeaderDiv>
  );
};
export default Header;
