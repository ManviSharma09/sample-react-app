import firebase from "firebase";
import { toastr } from "react-redux-toastr";
import { push } from "connected-react-router";
import actionTypes from "../actionConstants/index";
import { put, takeLatest } from "redux-saga/effects";
import { startSpinner, stopSpinner } from "../actions/loaderActions";

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
    console.log("error is", e);
    toastr.error(`${e}`);
  }
  yield put(stopSpinner());
}

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

export function* signOutRequest(action) {
  try {
    yield firebase.auth().signOut();
    yield put(push("/login"));
  } catch (e) {
    console.log("error is", e);
  }
}

export default [
  takeLatest(actionTypes.SIGN_UP_REQUEST, signUpRequest),
  takeLatest(actionTypes.LOGIN_REQUEST, loginRequest),
  takeLatest(actionTypes.SIGN_OUT_REQUEST, signOutRequest)
];
