const initialState = {
  token: null,
  loading: false,
  profile: null,
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
    case "user/loginSuccess": {
      // payload => obj with all the user data
      const { profile, token } = action.payload;
      return { ...state, profile: profile, token: token, loading: false };
    }
    case "user/logout": {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
