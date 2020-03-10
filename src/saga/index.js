import { all } from "redux-saga/effects";
import authSaga from "./authSaga";
import updateDisplayProfileSaga from "./updateDisplayProfileSaga";

export const tasks = [...authSaga, ...updateDisplayProfileSaga];

function* rootSaga() {
  yield all(tasks);
}

export default rootSaga;
