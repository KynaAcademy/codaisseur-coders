// src/store/reducer.js
import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";

function someFeatureReducer(state = "hi", action) {
  return state;
}

const reducer = combineReducers({
  someFeature: someFeatureReducer
  // etc.
});

export default reducer;
