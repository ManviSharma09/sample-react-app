import { toastr } from "react-redux-toastr";
import { push } from "connected-react-router";
import actionTypes from "../actionConstants/index";
import { put, takeLatest } from "redux-saga/effects";
import services from "../services/firebaseServices/index";
import { startSpinner, stopSpinner } from "../actions/loaderActions";

export function* signUpRequest(action) {
  yield put(startSpinner());
  const { email, password } = action.payload;
  try {
    yield services.auth.signUpUser(email, password);
    const user = yield services.auth.getCurrentUser();
    if (user) {
      yield put(push("/photoDashboard"));
    }
  } catch (e) {
    toastr.error(`${e}`);
  }
  yield put(stopSpinner());
}

export function* loginRequest(action) {
  yield put(startSpinner());
  const { email, password } = action.payload;
  try {
    yield services.auth.signInUser(email, password);
    const user = yield services.auth.getCurrentUser();
    if (user) {
      yield put(push("/photoDashboard"));
    }
  } catch (e) {
    toastr.error(`${e}`);
  }
  yield put(stopSpinner());
}

export function* signOutRequest(action) {
  try {
    yield services.auth.signOutUser();
    yield put(push("/login"));
  } catch (e) {
    toastr.error(`${e}`);
  }
}

export default [
  takeLatest(actionTypes.SIGN_UP_REQUEST, signUpRequest),
  takeLatest(actionTypes.LOGIN_REQUEST, loginRequest),
  takeLatest(actionTypes.SIGN_OUT_REQUEST, signOutRequest)
];
