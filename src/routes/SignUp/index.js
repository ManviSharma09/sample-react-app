import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  SET_COUNT
} from "../../reducers/constants";

const SignUp = () => {

  const {count} = useSelector(state => ({count:state.photoEditor.count}))
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: INCREMENT_COUNT })
  const decrement = () => dispatch({ type: DECREMENT_COUNT })
  const setCount =  e => dispatch({type:SET_COUNT,payload:{count:e.target.value}})

  return (
    <div>
      <h2>Sign Up</h2>
      <div>{count}</div>
      <button onClick={increment}>IncrementCount</button>
      <button onClick={decrement}>DecrementCount</button>
      <input
        type="number"
        onChange={setCount}
        value={count}
      />
    </div>
  );
};

export default SignUp;
