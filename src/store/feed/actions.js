import axios from "axios";
import { useSelector } from "react-redux";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function startLoading() {
  return {
    type: "feed/startLoading",
  };
}

export function postsFetched(morePosts) {
  return {
    type: "feed/postsFetched",
    payload: morePosts,
  };
}

// Write them all with a surrounding function
export const fetchPosts = () => async (dispatch, getState) => {
  try {
    const posts = getState().feed.posts;
    console.log("getState", getState());

    if (!posts.length) {
      dispatch(startLoading());

      const response = await axios.get(`${API_URL}/posts`);

      dispatch(postsFetched(response.data.rows));
    }
  } catch (e) {
    console.log(e.message);
  }
};
