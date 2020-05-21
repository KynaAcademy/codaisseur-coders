// src/store/reducer.js
import { combineReducers } from "redux";
import feedSliceReducer from "./feed/reducer";
import postPageSliceReducer from "./postPage/reducer";
import authReducer from "./auth/reducer";

const reducer = combineReducers({
  feed: feedSliceReducer,
  postPage: postPageSliceReducer,
  auth: authReducer,
  // etc.
});

export default reducer;
