// src/store/feed/reducer.js

const initialState = {
  token: null,
  name: null,
  email: null,
  loading: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/LOADING": {
      return { ...state, loading: true };
    }
    case "user/STORE_TOKEN": {
      return {
        ...state,
        token: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}
