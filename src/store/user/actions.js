import axios from "axios";

const startLoading = () => ({ type: "user/LOADING" });

const storeToken = jwt => {
  return {
    type: "user/STORE_TOKEN",
    payload: jwt,
  };
};

export const signup = (name, email, password) => async (dispatch, getState) => {
  try {
    // Trigger loading somehow

    dispatch(startLoading());
    // Make the request

    const response = await axios.post(
      "https://codaisseur-coders-network.herokuapp.com/signup",
      { email, name, password }
    );

    console.log("response", response);
    dispatch(storeToken(response.data.jwt));
    // Save token to redux
    // Redirect user to homepage
  } catch (e) {
    console.log(e.message);
  }
};
