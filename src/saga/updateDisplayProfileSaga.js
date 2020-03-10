import { toastr } from "react-redux-toastr";
import actionTypes from "../actionConstants";
import { put, takeLatest } from "redux-saga/effects";
import { updateUserDisplayInfoProfile } from "../services/firebaseServices/auth";
import { startSpinner, stopSpinner } from "../actions/loaderActions";

export function* updateUserDisplayProfile(action) {
  yield put(startSpinner());
  try {
    yield updateUserDisplayInfoProfile(action.payload);
    toastr.success("Profile Updated SuccessFully");
  } catch (e) {
    toastr.error(`${e}`);
  }
  yield put(stopSpinner());
}
export default [
  takeLatest(actionTypes.UPDATE_PROFILE_REQUEST, updateUserDisplayProfile)
];
