// src/store/reducer.js
import { combineReducers } from "redux";
import postPageSliceReducer from "./postPage/reducer";
import feedReducer from "./feed/reducer";

const reducer = combineReducers({
  postPage: postPageSliceReducer,
  feed: feedReducer,
  // etc.
});

export default reducer;
