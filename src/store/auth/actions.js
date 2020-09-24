import axios from "axios";
const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

const userLoggedIn = (token, profile) => {
  return {
    type: "LOGIN_SUCCESSFUL",
    payload: {
      token,
      profile,
    },
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const loginResponse = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      // console.log(loginResponse);
      const token = loginResponse.data.jwt;
      localStorage.setItem("myToken", token); //save token to local storage
      dispatch(getUserProfile(token));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const bootstrapLoginState = () => {
  return (dispatch, getState) => {
    // check if there is something in local storage
    const myToken = localStorage.getItem("myToken");
    console.log("saved token?", myToken);
    // if there is, call /me
    if (myToken) {
      dispatch(getUserProfile(myToken));
    }
  };
};

export const getUserProfile = token => {
  return async (dispatch, getState) => {
    const userProfileResponse = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userProfile = userProfileResponse.data;
    dispatch(userLoggedIn(token, userProfile));
  };
};

// const getUserProfile = async (token) => {
//   try {
//     // request GET to /me
//     const response = await axios.get(
//       "https://codaisseur-coders-network.herokuapp.com/me",
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     // console.log(response);
//     return response.data;
//   } catch (e) {
//     console.log(e);
//   }
// };

// export const login = (email, password) => async (dispatch, getState) => {
//   try {
//     const response = await axios.post(
//       "https://codaisseur-coders-network.herokuapp.com/login",
//       {
//         email,
//         password,
//       }
//     );
//     // console.log(response);
//     const { jwt } = response.data;

//     const userProfile = await getUserProfile(jwt);

//     localStorage.setItem("jwt", jwt);

//     dispatch(saveUserData(jwt, userProfile));
//   } catch (e) {
//     console.log("error", e);
//   }
//   // do POST request to /login,
//   // console.log response
// };

// export const bootstrapLogin = () => async (dispatch, getState) => {
//   const jwt = localStorage.getItem("jwt");
//   if (jwt) {
//     // make /me call
//     const userProfile = await getUserProfile(jwt);
//     console.log("user profile loaded automatically", userProfile);
//     dispatch(saveUserData(jwt, userProfile));
//   } else {
//     console.log("no token stored in localstorage");
//   }
// };
