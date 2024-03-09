import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "../Redux/UserAuth/userReducer";
let rootReducer = combineReducers({ userReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
