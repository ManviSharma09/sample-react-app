import { combineReducers } from "redux";
import photoEditor from "./photoEditor";
import { reducer as formReducer } from "redux-form";

export default combineReducers({ photoEditor, form: formReducer });
