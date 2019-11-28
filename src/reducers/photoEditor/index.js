import { INCREMENT_COUNT, DECREMENT_COUNT, SET_COUNT } from "../constants";

const initialState = {
  count: 3
};

const photoEditor = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: (state.count += 1) };
    case DECREMENT_COUNT:
      return { ...state, count: --state.count };
    case SET_COUNT:
      return { ...state, count: action.payload.count };
    default:
      return state;
  }
};

export default photoEditor;
