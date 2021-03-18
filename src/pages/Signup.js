import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../store/user/actions";
import { useHistory } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const onFieldChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const { name, email, password } = formData;
    dispatch(signUp(name, email, password, history));
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div>
          <label style={{ marginRight: 15 }}>Name</label>
          <input
            type='text'
            value={formData.name}
            name='name'
            onChange={onFieldChange}
          />
        </div>
        <div>
          <label style={{ marginRight: 15 }}>Email</label>
          <input
            type='text'
            value={formData.email}
            name='email'
            onChange={onFieldChange}
          />
        </div>
        <div>
          <label style={{ marginRight: 15 }}>Password</label>
          <input
            type='text'
            value={formData.password}
            name='password'
            onChange={onFieldChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default SignUpPage;
