import axios from "../axios";

const startLoading = () => ({ type: "user/LOADING" });

const storeToken = jwt => {
  return {
    type: "user/STORE_TOKEN",
    payload: jwt,
  };
};

const saveProfileAndToken = (profile, token) => {
  return {
    type: "user/STORE_PROFILE",
    payload: { profile, token },
  };
};

export const logout = () => {
  return {
    type: "user/LOGOUT",
  };
};

export const login = (email, password, history) => async (
  dispatch,
  getState
) => {
  try {
    //
    dispatch(startLoading());

    const response = await axios.post("/login", { email, password });

    const token = response.data.jwt;
    // Login is successful

    const profileResponse = await axios.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("My profile?", profileResponse);

    // later
    dispatch(saveProfileAndToken(profileResponse.data, token));
    history.push("/"); // Redirect to homepage
  } catch (e) {
    console.log(e.message);
  }
};

export const signup = (name, email, password) => async (dispatch, getState) => {
  try {
    // Trigger loading somehow

    dispatch(startLoading());
    // Make the request

    const response = await axios.post("/signup", { email, name, password });

    console.log("response", response);
    dispatch(storeToken(response.data.jwt));
    // Save token to redux
    // Redirect user to homepage
  } catch (e) {
    console.log(e.message);
  }
};
