import actionTypes from "../actionConstants";
const initialState = {
  authSpinner: false
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_START:
      return { authSpinner: true };
    case actionTypes.LOADING_STOP:
      return { authSpinner: false };
    default:
      return { ...state };
  }
};
export default authReducer;
