// src/components/PostsFeed.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";

import { startLoading, postsFetched } from "../store/feed/actions";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";

import "./PostsFeed.css";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {
  const dispatch = useDispatch();

  const loading = useSelector(selectFeedLoading);
  const posts = useSelector(selectFeedPosts);

  async function fetchNext5Posts() {
    dispatch(startLoading());

    const res = await axios.get(
      `${API_URL}/posts?offset=${posts.length}&limit=5`
    );

    const morePosts = res.data.rows;

    dispatch(postsFetched(morePosts));
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      {posts.map(post => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p className="meta">
              {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
              {/* {post.post_likes.length} likes &bull;{" "} */}
              <span className="tags">
                {post.tags.map(tag => {
                  return (
                    <React.Fragment key={tag.id}>
                      <span className="Tag">{tag.tag}</span>{" "}
                    </React.Fragment>
                  );
                })}
              </span>
            </p>
          </div>
        );
      })}
      <p>
        {loading ? (
          <em>Loading...</em>
        ) : (
          <button onClick={fetchNext5Posts}>Load more</button>
        )}
      </p>
    </div>
  );
}
