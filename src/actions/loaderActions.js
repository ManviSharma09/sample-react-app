import actionTypes from "../actionConstants/index";

export const startSpinner = () => {
  return {
    type: actionTypes.LOADING_START
  };
};

export const stopSpinner = () => {
  return {
    type: actionTypes.LOADING_STOP
  };
};
