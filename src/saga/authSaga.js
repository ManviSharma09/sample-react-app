import { toastr } from "react-redux-toastr";
import { push } from "connected-react-router";
import actionTypes from "../actionConstants/index";
import { put, takeLatest } from "redux-saga/effects";
import services from "../services/firebaseServices/index";
import { startSpinner, stopSpinner } from "../actions/loaderActions";
import { signUpSuccess, loginSuccess } from "../actions/authActions";

export function* signUpRequest(action) {
  yield put(startSpinner());
  const { firstName, lastName, email, password } = action.payload;
  try {
    yield services.auth.signUpUser(email, password);
    const user = yield services.auth.getCurrentUser();
    yield services.auth.updateUserProfile(firstName, lastName, user);
    const uid = user.uid;
    const photoUrl = user.photoURL;
    yield services.fireStore.saveUserBasicProfile(uid, photoUrl);
    yield put(
      signUpSuccess({
        userId: user.uid,
        photoUrl: user.photoURL,
        displayName: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber
      })
    );
    localStorage.setItem("AUTH_TOKEN", true);
    yield put(push("/photoDashboard"));
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
    yield put(
      loginSuccess({
        userId: user.uid,
        photoUrl: user.photoURL,
        displayName: user.displayName,
        email: user.email,
        phoneNumber: user.phoneNumber
      })
    );
    localStorage.setItem("AUTH_TOKEN", true);
    yield put(push("/photoDashboard"));
  } catch (e) {
    toastr.error(`${e}`);
  }
  yield put(stopSpinner());
}

export function* signOutRequest(action) {
  try {
    yield services.auth.signOutUser();
    localStorage.setItem("AUTH_TOKEN", false);
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
