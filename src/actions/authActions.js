import actionTypes from "../actionConstants/index";

export const signUpRequest = data => {
  return {
    type: actionTypes.SIGN_UP_REQUEST,
    payload: data
  };
};

export const signUpSuccess = data => {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    payload: data
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

export const loginSuccess = data => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: data
  };
};

export const loginFailure = () => {
  return {
    type: actionTypes.LOGIN_FAILURE
  };
};

export const signOutRequest = () => {
  return {
    type: actionTypes.SIGN_OUT_REQUEST
  };
};
