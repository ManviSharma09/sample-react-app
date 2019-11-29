import { INCREMENT_COUNT, DECREMENT_COUNT, SET_COUNT } from "../constants";

const initialState = {
  count: 0
};

const photoEditor = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT: {
      return {
        count: Number(state.count) + 1
      };
    }
    case DECREMENT_COUNT: {
      return {
        count: Number(state.count) - 1
      };
    }
    case SET_COUNT: {
      return {
        count: action.payload.count
      };
    }
    default: {
      return state;
    }
  }
};

export default photoEditor;
