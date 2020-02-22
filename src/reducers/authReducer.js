import actionTypes from "../actionConstants";
const initialState = {
  authSpinner: false,
  userDetails: {
    userId: "",
    displayName: "",
    profileUrl: ""
  }
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_START:
      return { ...state, authSpinner: true };
    case actionTypes.LOADING_STOP:
      return { ...state, authSpinner: false };
    case actionTypes.SIGN_UP_SUCCESS:
      return { ...state, userDetails: action.payload };
    case actionTypes.LOGIN_SUCCESS:
      return { ...state, userDetails: action.payload };
    default:
      return { ...state };
  }
};
export default authReducer;
