// src/store/reducer.js
import { combineReducers } from "redux";
import postPageSliceReducer from "./postPage/reducer";
import feedReducer from "./feed/reducer";
import userReducer from "./user/reducer";

const reducer = combineReducers({
  postPage: postPageSliceReducer,
  feed: feedReducer,
  user: userReducer,
  // etc.
});

export default reducer;
