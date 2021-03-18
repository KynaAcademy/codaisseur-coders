const initialState = {
  token: null,
  loading: false,
  userData: null,
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
      const { userData, token } = action.payload;
      return { ...state, userData: userData, token: token, loading: false };
    }
    default: {
      return state;
    }
  }
}
