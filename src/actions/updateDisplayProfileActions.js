import actionTypes from "../actionConstants";

export const updateDisplayProfile = data => {
  return {
    type: actionTypes.UPDATE_PROFILE_REQUEST,
    payload: data
  };
};
