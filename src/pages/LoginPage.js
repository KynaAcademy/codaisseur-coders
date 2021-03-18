import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../store/user/actions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const onFormSubmit = e => {
    e.preventDefault();
    console.log("login", email, password);
    dispatch(login(email, password));
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          <label style={{ marginRight: 15 }}>Email</label>
          <input
            type='text'
            value={email}
            name='email'
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label style={{ marginRight: 15 }}>Password</label>
          <input
            type='text'
            value={password}
            name='password'
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
