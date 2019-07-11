import { createStore, applyMiddleware } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import LoginDialogReducer from "./reducers/LoginReducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    auth : AuthReducer,
    dialog : LoginDialogReducer
  }), applyMiddleware(thunk)
);

export default store;
