import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import rootSaga from "../saga";
import history from "./history";
import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware, routerMiddleware(history))
);
sagaMiddleware.run(rootSaga);
export default store;
