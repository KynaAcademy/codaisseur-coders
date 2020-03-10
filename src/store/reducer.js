// src/store/reducer.js
import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer
  // etc.
});

export default reducer;
