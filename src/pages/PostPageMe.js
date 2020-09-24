import React, { useEffect } from "react";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/postPageMe/actions";
import { getDetailPost } from "../store/postPageMe/selectors";

const PostPageMe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const postData = useSelector(getDetailPost);

  console.log("redux data in the component!", postData);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  // All the displaying, we are not going to worry about it right now
  return (
    <div>
      {!postData ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{postData.title}</h1>
          <p className='meta'>
            By <strong>{postData.developer.name}</strong> &bull;{" "}
            {moment(postData.createdAt).format("DD-MM-YYYY")} &bull;{" "}
          </p>
          <ReactMarkdown source={postData.content} />

          <h2>Comments</h2>
          {/* {postData.comments.rows.length === 0 ? (
            <p>
              <em>No comments left behind yet :(</em>
            </p>
          ) : (
            postData.comments.rows.map(comment => {
              return (
                <div key={comment.id}>
                  <p>{comment.text}</p>
                  <p className='meta'>
                    By <strong>{comment.developer.name}</strong> &bull;{" "}
                    {moment(comment.createdAt).format("DD-MM-YYYY")}{" "}
                  </p>
                </div>
              );
            })
          )} */}
        </>
      )}
    </div>
  );
};

export default PostPageMe;
