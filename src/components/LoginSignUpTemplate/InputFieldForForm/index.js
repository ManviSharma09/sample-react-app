import React from "react";
import styled from "styled-components";
import { Field } from "redux-form";

const InputFieldForForm = ({ name, labelName, type }) => {
  const Label = styled.label`
    font-size: 15px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.9);
  `;

  const FormEntryDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  `;

  const Input = styled.input`
    width: 250px;
    height: 25px;
    border-radius: 5px;
    &:focus {
      border-color: rgba(0, 0, 0, 0.5);
      /* outline: none; */
      background-color: rgba(0, 0, 0, 0.5);
    }
  `;

  const renderField = ({ input, type }) => (
    <div>
      <Input {...input} type={type} />
    </div>
  );
  return (
    <FormEntryDiv>
      <Label htmlFor={name}>{labelName}</Label>
      <Field name={name} component={renderField} type={type} />
    </FormEntryDiv>
  );
};
export default InputFieldForForm;
