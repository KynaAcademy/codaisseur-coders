// src/components/PostsFeed.js
import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { isFeedLoading, getFeedPosts } from "../store/feed/selectors";
import { saveFeedPosts, fetchPostsThunk } from "../store/feed/actions";

import "./PostsFeed.css";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export default function PostsFeed() {
  const reduxPosts = useSelector(getFeedPosts);
  const loading = useSelector(isFeedLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    // here do some fetching
    dispatch(fetchPostsThunk);
  }, []);

  return (
    <div className='PostsFeed'>
      <h2>Recent posts</h2>

      <div>
        {loading ? (
          <em>Loading...</em>
        ) : (
          <>
            {reduxPosts.map(p => (
              <div key={p.id}>
                <h3>{p.title}</h3>
                <p>{p.content}</p>
              </div>
            ))}
            <button onClick={() => dispatch(fetchPostsThunk)}>Load more</button>
          </>
        )}
      </div>
    </div>
  );
}

/*
  {posts.map(post => {
        return (
          <div key={post.id}>
            <h3>
                {post.title}
            </h3>
            <p className="meta">
              {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
              {/* {post.post_likes.length} likes &bull;{" "} }
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



*/
