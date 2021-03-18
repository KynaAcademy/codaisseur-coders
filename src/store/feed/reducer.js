// src/store/feed/reducer.js

const initialState = {
  loading: false,
  posts: [],
};

export default function feedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "feed/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "feed/postsFetched": {
      return {
        loading: false,
        posts: [...state.posts, ...action.payload],
      };
    }
    case "feed/addOne": {
      const newPost = action.payload;
      return {
        ...state,
        posts: [newPost, ...state.posts],
      };
    }
    default: {
      return state;
    }
  }
}
