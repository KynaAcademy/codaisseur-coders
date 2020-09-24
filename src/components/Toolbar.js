import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loggedInUser } from "../store/auth/selectors";
import { Link } from "react-router-dom";
import { logout } from "../store/auth/actions";

const Toolbar = () => {
  const loggedIn = useSelector(loggedInUser);
  const dispatch = useDispatch();
  console.log("is there someone logged in?", loggedIn);

  if (!loggedIn) return <Link to='/login'>Login</Link>;

  return (
    <div>
      <h3>Welcome {loggedIn.name}</h3>
      <Link to='/'>Home</Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Toolbar;
