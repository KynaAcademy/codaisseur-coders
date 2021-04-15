// src/store/feed/reducer.js

const initialState = {
  token: null,
  loading: false,
  profile: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/LOADING": {
      return { ...state, loading: true };
    }
    case "user/LOGOUT": {
      return initialState;
    }
    case "user/STORE_TOKEN": {
      return {
        ...state,
        token: action.payload,
        loading: false,
      };
    }
    case "user/STORE_PROFILE": {
      return {
        ...state,
        profile: action.payload.profile,
        token: action.payload.token,
      };
    }
    default: {
      return state;
    }
  }
}
