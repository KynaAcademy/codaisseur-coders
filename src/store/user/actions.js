import axios from "../axios";

// { type, payload } regular actions
// function type => thunks => we can do async and dispatch other stuff also

const setLoading = () => ({ type: "user/loading" });

const setToken = jwt => ({ type: "user/setToken", payload: jwt });

export const signUp = (name, email, password, history) => async (
  dispatch,
  getState
) => {
  try {
    console.log("thunk", name, email, password);
    dispatch(setLoading());

    const response = await axios.post("/signup", {
      name,
      email,
      password,
    });

    console.log(response.data.jwt);
    dispatch(setToken(response.data.jwt));

    history.push("/"); // send them to homepage
  } catch (e) {
    console.log(e.message);
  }
};
