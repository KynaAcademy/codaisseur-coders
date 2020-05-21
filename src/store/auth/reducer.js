const initialState = {
  me: null, // the logged-in user
  accessToken: null, //jwt -> token
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_USER_DATA":
      const { token, userProfile: me } = action.payload;
      return {
        accessToken: token,
        me,
      };
    default:
      return state;
  }
}
