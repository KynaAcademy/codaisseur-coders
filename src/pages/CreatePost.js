import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { createPost } from "../store/feed/actions";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(createPost(title, content));
  };

  return (
    <div>
      <h2>Create a post!</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          <label style={{ marginRight: 15 }}>Title</label>
          <input
            type='text'
            value={title}
            name='title'
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label style={{ marginRight: 15 }}>Content</label>
          <textarea
            type='textarea'
            value={content}
            name='content'
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default CreatePostPage;
