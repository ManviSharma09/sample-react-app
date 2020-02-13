import { put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import firebase from "firebase";
import { toastr } from "react-redux-toastr";

export function* loginRequest(action) {
  yield put({ type: "LOADING_START" });
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
  yield put({ type: "LOADING_STOP" });
}

export function* signUpRequest(action) {
  yield put({ type: "LOADING_START" });
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
  yield put({ type: "LOADING_STOP" });
}

export default [
  takeLatest("SIGN_UP_REQUEST", signUpRequest),
  takeLatest("LOGIN_REQUEST", loginRequest)
];
