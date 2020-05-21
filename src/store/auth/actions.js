import axios from "axios";

const saveUserData = (token, userProfile) => {
  return {
    type: "SAVE_USER_DATA",
    payload: { token, userProfile },
  };
};

const getUserProfile = async (token) => {
  try {
    // request GET to /me
    const response = await axios.get(
      "https://codaisseur-coders-network.herokuapp.com/me",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const login = (email, password) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      "https://codaisseur-coders-network.herokuapp.com/login",
      {
        email,
        password,
      }
    );
    // console.log(response);
    const { jwt } = response.data;

    const userProfile = await getUserProfile(jwt);

    localStorage.setItem("jwt", jwt);

    dispatch(saveUserData(jwt, userProfile));
  } catch (e) {
    console.log("error", e);
  }
  // do POST request to /login,
  // console.log response
};

export const bootstrapLogin = () => async (dispatch, getState) => {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    // make /me call
    const userProfile = await getUserProfile(jwt);
    console.log("user profile loaded automatically", userProfile);
    dispatch(saveUserData(jwt, userProfile));
  } else {
    console.log("no token stored in localstorage");
  }
};
