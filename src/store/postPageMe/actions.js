import axios from "axios";

export function savePost(postData) {
  return {
    type: "POST_FETCHED",
    payload: postData,
  };
}

export function fetchPost(id) {
  return async (dispatch, getState) => {
    // fetch data with axios
    const response = await axios.get(
      `https://codaisseur-coders-network.herokuapp.com/posts/${id}`
    );
    console.log("In the thunk", response.data);
    const postData = response.data;

    // dispatch something to get it into the reducer
    dispatch(savePost(postData));
  };
}
