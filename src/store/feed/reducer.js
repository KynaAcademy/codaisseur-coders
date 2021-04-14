// src/store/feed/reducer.js

const initialState = {
  loading: true,
  posts: [],
};

export default function feedPageSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "POSTS_FETCHED": {
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false,
      };
    }
    case "START_LOADING": {
      return { ...state, loading: true };
    }
    default: {
      return state;
    }
  }
}
