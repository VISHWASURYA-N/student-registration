import { combineReducers } from "redux";
import Login from "./Login";
import studentRegistor from "./studentRegistor";
const combineReducer=combineReducers({studentRegistor,Login});
export default combineReducer