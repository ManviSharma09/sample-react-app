import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import history from "../../store/history";
import { dropDownItems } from "../Header/dropdownConstants";
import { signOutRequest } from "../../actions/authActions";

const DropDownDiv = styled.div`
  width: 200px;
  background-color: white;
  position: fixed;
  top: 60px;
  right: -10px;
  display: flex;
  flex-direction: column;
`;

const DropDownItemContainer = styled.div`
  height: 45px;
  display: flex;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 20px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
`;

const ImgDiv = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

const LabelDiv = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const DropDownItem = props => {
  return (
    <DropDownItemContainer
      onClick={() => {
        props.action();
      }}
    >
      <ImgDiv src={props.image} alt="icon"></ImgDiv>
      <LabelDiv>{props.label}</LabelDiv>
    </DropDownItemContainer>
  );
};

const CustomDropDown = props => {
  const dispatch = useDispatch();
  const [dropDownOpen, updateDropDownOpen] = useState(false);

  const actionToDispatch = label => {
    if (label === dropDownItems[0].label) {
      history.push("/profile");
    }
    if (label === dropDownItems[1].label) {
      return dispatch(signOutRequest());
    }
  };

  return (
    <div>
      <div onClick={() => updateDropDownOpen(!dropDownOpen)}>
        {props.faceComponent}
      </div>

      {dropDownOpen && (
        <DropDownDiv>
          {props.dataList.map(dataItem => {
            return (
              <DropDownItem
                key={dataItem.label}
                image={dataItem.image}
                label={dataItem.label}
                action={() => actionToDispatch(dataItem.label)}
              />
            );
          })}
        </DropDownDiv>
      )}
    </div>
  );
};

export default CustomDropDown;
