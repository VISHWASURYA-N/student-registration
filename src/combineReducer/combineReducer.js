import { combineReducers } from "redux";
import Login from "../action/Login";
import studentRegistor from "../action/studentRegistor";
import themeToggle from "../action/themeToggle";

const combineReducer=combineReducers({studentRegistor,Login,themeToggle});
export default combineReducer