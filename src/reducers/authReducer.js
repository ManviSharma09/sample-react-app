import actionTypes from "../actionConstants";
const initialState = {
  signUpSpinner: false
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_START:
      return { signUpSpinner: true };
    default:
      return { ...state };
  }
};
export default authReducer;
