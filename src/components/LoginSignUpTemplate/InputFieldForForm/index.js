import React from "react";
import styled from "styled-components";
import { Field } from "redux-form";

const Label = styled.label`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
  color: rgba(0, 0, 0, 0.9);
`;

const FormEntryDiv = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
`;

const Input = styled.input`
  width: 250px;
  height: 25px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  outline: none;
`;
const ErrorDiv = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: red;
  text-align: right;
  height: 15px;
`;

const renderField = ({ input, type, meta: { touched, error } }) => {
  return (
    <div>
      <Input {...input} type={type} />
      <ErrorDiv>{touched && error}</ErrorDiv>
    </div>
  );
};
const InputFieldForForm = ({ name, labelName, type, validate }) => {
  return (
    <FormEntryDiv>
      <Label htmlFor={name}>{labelName}</Label>
      <Field
        name={name}
        component={renderField}
        type={type}
        validate={validate}
      />
    </FormEntryDiv>
  );
};
export default InputFieldForForm;
