import actionTypes from "../actionConstants";

export const getUserData = id => {
  return {
    type: actionTypes.GET_USER_DATA_REQUEST,
    payload: id
  };
};
