import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../store/user/actions";
import { userLoading } from "../store/user/selectors";

// Build a signup form!
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(userLoading);

  const onFormSubmit = event => {
    event.preventDefault();
    // Collected the data
    // Now need to make a request to the backend to create this user.
    // we are going to use a thunk
    dispatch(login(email, password, history));
  };

  return (
    <div>
      <h3>Login!</h3>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={onFormSubmit}>
          <div>
            <label>Email</label>
            <input name='email' onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password</label>
            <input
              name='password'
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button>Log in</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
