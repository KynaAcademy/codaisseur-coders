import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signup } from "../store/user/actions";
import { userLoading } from "../store/user/selectors";
// Build a signup form!
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector(userLoading);

  const onFormSubmit = event => {
    event.preventDefault();
    // Collected the data
    // Now need to make a request to the backend to create this user.
    // we are going to use a thunk
    dispatch(signup(name, email, password));
  };

  return (
    <div>
      <h3>Create your account!</h3>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={onFormSubmit}>
          <div>
            <label>Name</label>
            <input name='name' onChange={e => setName(e.target.value)} />
          </div>
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
            <button>Signup</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Signup;
