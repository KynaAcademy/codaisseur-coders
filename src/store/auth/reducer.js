const initialState = {
  me: null, // the logged-in user
  accessToken: null, //jwt -> token
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "LOGIN_SUCCESSFUL": {
      return {
        accessToken: payload.token,
        me: payload.profile,
      };
    }
    case "LOGOUT": {
      localStorage.removeItem("myToken"); //remove token from localStorage;

      return initialState;
    }
    default:
      return state;
  }
}
