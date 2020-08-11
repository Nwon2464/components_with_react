import { combineReducers } from "redux";
import authReducers from "./authReducers";
import { reducer as formReducers } from "redux-form";
import streamReducers from "./streamReducers";
export default combineReducers({
  auth: authReducers,
  form: formReducers,
  streams: streamReducers,
});
