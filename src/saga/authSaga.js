import actionTypes from "../actionConstants";
import { put, takeLatest } from "redux-saga/effects";
import firebase from "firebase";
export function* signUpRequest(action) {
  yield put({ type: "LOADING_START" });
  console.log("Entered here in123  saga as well", action);
  const { firstName, lastName, email, password } = action.payload;
  try {
    yield firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = yield firebase.auth().currentUser;
    console.log("Entered here in123  saga as well user", user);
  } catch (e) {
    console.log("#### e", e);
  }
}

export default [takeLatest("SIGN_UP_REQUEST", signUpRequest)];
