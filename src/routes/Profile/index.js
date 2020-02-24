import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { profileConstants } from "./profileConstants";
import defaultUser from "../../utils/images/defaultUser.webp";

const ContainerDiv = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e1e3e9;
`;

const ProfileImage = styled.img`
  width: 225px;
  height: 225px;
  border-radius: 25%;
  background-color: red;
  background-image: url(${defaultUser});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
`;

const DetailsSection = styled.div`
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const CustomInput = styled.input`
  height: 30px;
  width: 450px;
  outline: none;
  font-size: 16px;
  border-top: none;
  border-left: none;
  border-right: none;
  padding-left: 15px;
  border-radius: 10px;
  padding-right: 15px;
`;

const ProfileEntity = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
`;

const Button = styled.button`
  width: 40%;
  height: 30px;
  font-size: 18px;
  margin-top: 25px;
  align-self: center;
`;

const Profile = () => {
  const { email, phoneNumber, displayName, photoUrl } = useSelector(state => ({
    email: state.auth.userDetails.email,
    phoneNumber: state.auth.userDetails.phoneNumber,
    displayName: state.auth.userDetails.displayName,
    photoUrl: state.auth.userDetails.photoUrl
  }));

  const [emailValue, updateEmail] = useState(email);
  const [phoneNumberValue, updatePhoneNumber] = useState(phoneNumber);
  const [displayNameValue, updateDisplayNameValue] = useState(displayName);
  const [photoUrlValue, updatePhotoUrlValue] = useState(photoUrl);

  useEffect(() => {
    updateEmail(email);
    updatePhoneNumber(phoneNumber);
    updateDisplayNameValue(displayName);
  }, [email, phoneNumber, displayName]);

  const getInputValue = value => {
    let inputValue = "Not Provided";
    if (value === "email") {
      inputValue = emailValue;
    }
    if (value === "phoneNumber") {
      inputValue = phoneNumberValue;
    }
    if (value === "displayName") {
      inputValue = displayNameValue;
    }
    if (!inputValue || inputValue === 0) {
      inputValue = "Not Provided";
    }
    return inputValue;
  };

  const handleChange = (event, value) => {
    if (value === "email") {
      updateEmail(event.target.value);
    }
    if (value === "phoneNumber") {
      updatePhoneNumber(event.target.value);
    }
    if (value === "displayName") {
      updateDisplayNameValue(event.target.value);
    }
  };

  return (
    <Layout>
      <ContainerDiv>
        <ProfileImage />
        <DetailsSection>
          {profileConstants.map(profileEntity => {
            return (
              <ProfileEntity key={profileEntity.label}>
                <Label>{profileEntity.label}</Label>
                <CustomInput
                  type={profileEntity.inputType}
                  value={getInputValue(profileEntity.value)}
                  onChange={event => {
                    handleChange(event, profileEntity.value);
                  }}
                />
              </ProfileEntity>
            );
          })}
          <Button>Save</Button>
        </DetailsSection>
      </ContainerDiv>
    </Layout>
  );
};
export default Profile;
