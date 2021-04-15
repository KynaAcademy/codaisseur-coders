// src/App.js
import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getUserName } from "./store/user/selectors";
import { logout } from "./store/user/actions";

import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { findRenderedComponentWithType } from "react-dom/test-utils";

const NavBar = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();

  console.log("name?", userName);
  return (
    <div>
      <Link to='/' style={{ marginRight: 15 }}>
        Home
      </Link>

      {userName ? (
        <>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <span>Welcome {userName}</span>
        </>
      ) : (
        <>
          <Link to='/login' style={{ marginRight: 15 }}>
            Login
          </Link>
          <Link to='/signup'>Signup</Link>
        </>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        {/* more pages to be added here later */}
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Homepage} />
      </Switch>
    </div>
  );
}
