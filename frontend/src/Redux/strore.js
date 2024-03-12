import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "../Redux/UserAuth/userReducer";
import { taskReducer } from "../Redux/task/taskReducer";
let rootReducer = combineReducers({ userReducer, taskReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
