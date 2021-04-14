// src/store/reducer.js
import { combineReducers } from "redux";
import postPageSliceReducer from "./postPage/reducer";

const reducer = combineReducers({
  postPage: postPageSliceReducer,
  // etc.
});

export default reducer;
