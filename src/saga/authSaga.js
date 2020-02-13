import firebase from "firebase";
import { toastr } from "react-redux-toastr";
import { push } from "connected-react-router";
import { put, takeLatest } from "redux-saga/effects";
import actionTypes from "../redux/actionConstants/index";
import { startSpinner, stopSpinner } from "../redux/actions/loaderActions";

export function* loginRequest(action) {
  yield put(startSpinner());
  const { email, password } = action.payload;
  try {
    yield firebase.auth().signInWithEmailAndPassword(email, password);
    const user = yield firebase.auth().currentUser;
    if (user) {
      yield put(push("/photoDashboard"));
    }
  } catch (e) {
    console.log("error is", e);
    toastr.error(`${e}`);
  }
  yield put(stopSpinner());
}

export function* signUpRequest(action) {
  yield put(startSpinner());
  const { email, password } = action.payload;
  try {
    yield firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = yield firebase.auth().currentUser;
    if (user) {
      yield put(push("/photoDashboard"));
    }
  } catch (e) {
    console.log("#### e", e);
    toastr.error(`${e}`);
  }
  yield put(stopSpinner());
}

export default [
  takeLatest(actionTypes.SIGN_UP_REQUEST, signUpRequest),
  takeLatest(actionTypes.LOGIN_REQUEST, loginRequest)
];
