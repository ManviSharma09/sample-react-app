import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import styled from "styled-components";
import LoginSignUpTemplate from "../../components/LoginSignUpTemplate";
// import {
//   INCREMENT_COUNT,
//   DECREMENT_COUNT,
//   SET_COUNT
// } from "../../reducers/constants";

// const Button = styled.button`
//   background: white;
//   color: white;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
// `;

// const Input = styled.input`
//   padding: 0.75em;
//   margin: 1em;
//   color: red;
//   background: papayawhip;
//   border-radius: 3px;
// `;

let SignUp = () => {
  // const { count } = useSelector(state => ({ count: state.photoEditor.count }));
  // const dispatch = useDispatch();

  // const increment = () => dispatch({ type: INCREMENT_COUNT });
  // const decrement = () => dispatch({ type: DECREMENT_COUNT });
  // const setCount = e =>
  //   dispatch({ type: SET_COUNT, payload: { count: e.target.value } });

  const onSubmit = event => {
    // event.preventDefault();
    console.log("event", event);
  };

  return (
    // <div>
    //   <h2>Sign Up</h2>
    //   <div>{count}</div>
    //   <Button onClick={increment}>IncrementCount</Button>
    //   <Button onClick={decrement}>DecrementCount</Button>
    //   <Input type="number" onChange={setCount} value={count} />
    // </div>
    <LoginSignUpTemplate formName="SignUp" onSubmit={onSubmit} />
  );
};

export default SignUp;
