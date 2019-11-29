import React from "react";
import { connect } from "react-redux";
import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  SET_COUNT
} from "../../reducers/constants";

const SignUp = ({ count, incrementCount, decrementCount, setCount }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <input
        type="number"
        value={count}
        onChange={event => setCount(event.target.value)}
      />
    </div>
  );
};

SignUp.defaultProps = {
  count: 0
};

const mapStateToProps = state => {
  const { count } = state.photoEditor;
  return {
    count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCount: () => dispatch({ type: INCREMENT_COUNT }),
    decrementCount: () => dispatch({ type: DECREMENT_COUNT }),
    setCount: count => dispatch({ type: SET_COUNT, payload: { count } })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
