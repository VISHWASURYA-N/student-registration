import { combineReducers } from "redux";
import Login from "../action/Login";
import studentRegistor from "../action/studentRegistor";

const combineReducer=combineReducers({studentRegistor,Login});
export default combineReducer