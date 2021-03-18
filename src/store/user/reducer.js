const initialState = {
  token: null,
  loading: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/loading": {
      return { ...state, loading: true };
    }
    case "user/setToken": {
      const jwt = action.payload;
      return { ...state, token: jwt, loading: false };
    }
    default: {
      return state;
    }
  }
}
