import axios from "axios";
import { useSelector } from "react-redux";

export const saveFeedPosts = posts => {
  return {
    type: "POSTS_FETCHED",
    payload: posts,
  };
};

export const startLoading = () => {
  return {
    type: "START_LOADING",
  };
};

export const fetchPostsThunk = async (dispatch, getState) => {
  try {
    const posts = getState().feed.posts;

    console.log("posts in thunk?", posts);
    dispatch(startLoading());
    console.log("starting request");

    const response = await axios.get(
      `https://codaisseur-coders-network.herokuapp.com/posts?offset=${posts.length}&limit=5`
    );
    console.log("got data in thunk", response.data);
    //setPosts(response.data.rows); //setting them to local state
    dispatch(saveFeedPosts(response.data.rows));
  } catch (e) {
    console.log(e.message);
  }
};

const selectSomething = reduxState => reduxState.something;
