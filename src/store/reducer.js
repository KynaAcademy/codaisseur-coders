// src/store/reducer.js
import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducer";
import authReducer from "./auth/reducer";
import postPageReducer from "./postPageMe/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  auth: authReducer,
  postPage: postPageReducer,
  // etc.
});

export default reducer;
