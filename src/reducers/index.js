import history from "../store/history";
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import { connectRouter } from "connected-react-router";
import { reducer as toastrReducer } from "react-redux-toastr";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  toastr: toastrReducer,
  router: connectRouter(history)
});
