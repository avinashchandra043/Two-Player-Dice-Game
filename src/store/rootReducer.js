import { combineReducers } from "redux";
import { myReducer } from "./myReducer";
export default combineReducers({
  my: myReducer,
});
