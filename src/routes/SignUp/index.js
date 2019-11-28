import React from "react";
import { connect } from "react-redux";
import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  SET_COUNT
} from "../../reducers/constants";

const SignUp = ({ count, increment, decrement, setCount }) => {
  return (
    <div>
      <h2>Sign Up</h2>
      <div>{count}</div>
      <button onClick={increment}>IncrementCount</button>
      <button onClick={decrement}>DecrementCount</button>
      <input
        type="number"
        onChange={e => setCount(e.target.value)}
        value={count}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { count: state.photoEditor.count };
};

const mapDisPatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: INCREMENT_COUNT }),
    decrement: () => dispatch({ type: DECREMENT_COUNT }),
    setCount: count => dispatch({ type: SET_COUNT, payload: { count } })
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(SignUp);
