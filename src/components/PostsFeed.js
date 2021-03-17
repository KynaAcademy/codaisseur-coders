// src/components/PostsFeed.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

import axios from "axios";

import { selectFeedLoading, selectPosts } from "../store/feed/selectors";
import { fetchPosts } from "../store/feed/actions";

import "./PostsFeed.css";

export default function PostsFeed() {
  const dispatch = useDispatch();
  const loading = useSelector(selectFeedLoading);

  const posts = useSelector(selectPosts);

  console.log("data I get back", posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className='PostsFeed'>
      <h2>Recent posts</h2>

      <p>
        {loading ? (
          <em>Loading...</em>
        ) : (
          <>
            {posts.map(post => {
              return (
                <div key={post.id}>
                  <h3>{post.title}</h3>
                  <p className='meta'>
                    {moment(post.createdAt).format("DD-MM-YYYY")} &bull;{" "}
                    {/* {post.post_likes.length} likes &bull;{" "} */}
                    <span className='tags'>
                      {post.tags.map(tag => {
                        return (
                          <React.Fragment key={tag.id}>
                            <span className='Tag'>{tag.tag}</span>{" "}
                          </React.Fragment>
                        );
                      })}
                    </span>
                  </p>
                </div>
              );
            })}
            <button onClick={() => console.log("more")}>Load more</button>
          </>
        )}
      </p>
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
