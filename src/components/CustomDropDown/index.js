import React, { useState } from "react";
import styled from "styled-components";

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
  display: flex;
  flex-direction: row;
  height: 30px;
  border-bottom: 1px solid lightgrey;
  align-items: center;
`;

const ImgDiv = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

const DropDownItem = props => {
  console.log("props here are", props);

  return (
    <DropDownItemContainer onClick={props.action}>
      <ImgDiv src={props.image} alt="icon"></ImgDiv>
      <div>{props.label}</div>
    </DropDownItemContainer>
  );
};

const CustomDropDown = props => {
  const [dropDownOpen, updateDropDownOpen] = useState(false);

  const someFunction = () => {
    const anptherFunction = () => {
      console.log("enterde dunctio");
    };

    return anptherFunction;
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
                action={someFunction()}
              />
            );
          })}
        </DropDownDiv>
      )}
    </div>
  );
};

export default CustomDropDown;
