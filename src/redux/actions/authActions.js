import actionTypes from "../actionConstants/index";

export const signUpRequest = data => {
  return {
    type: actionTypes.SIGN_UP_REQUEST,
    payload: data
  };
};

export const signUpSuccess = () => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS
  };
};

export const signUpFailure = () => {
  return {
    type: actionTypes.SIGN_UP_FAILURE
  };
};

export const loginRequest = data => {
  return {
    type: actionTypes.LOGIN_REQUEST,
    payload: data
  };
};

export const loginSuccess = () => {
  return {
    type: actionTypes.LOGIN_SUCCESS
  };
};

export const loginFailure = () => {
  return {
    type: actionTypes.LOGIN_FAILURE
  };
};
