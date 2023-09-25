import { combineReducers } from "@reduxjs/toolkit";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import postReducer from "./postReducer";

export default combineReducers({
  alerts: alertReducer,
  auth: authReducer,
  profile: profileReducer,
  post: postReducer,
});
