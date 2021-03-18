// src/App.js
import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectUserProfile } from "./store/user/selectors";
import { logout } from "./store/user/actions";
import Homepage from "./pages/Homepage";
import PostPage from "./pages/PostPage";
import SignUpPage from "./pages/Signup";
import LoginPage from "./pages/LoginPage";
import CreatePostPage from "./pages/CreatePost";

import "./App.css";

export default function App() {
  const userData = useSelector(selectUserProfile);
  const dispatch = useDispatch();

  const protectedRoutes = (Component, routerProps) => {
    const token = userData.token;
    return token ? <Component {...routerProps} /> : <Redirect to='/login' />;
  };

  return (
    <div>
      <div>
        <Link to='/' style={{ marginRight: 10 }}>
          Home
        </Link>
        {userData.profile ? (
          <>
            <Link to='/create' style={{ marginRight: 10 }}>
              Create
            </Link>
            <span>Welcome {userData.profile.name}</span>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          <>
            <Link to='/signup' style={{ marginRight: 10 }}>
              Sign up
            </Link>
            <Link to='/login' style={{ marginRight: 10 }}>
              Login
            </Link>
          </>
        )}
      </div>
      <Switch>
        {/* more pages to be added here later */}
        <Route path='/post/:id' component={PostPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/login' component={LoginPage} />
        <Route
          path='/create'
          render={routerProps => protectedRoutes(CreatePostPage, routerProps)}
        />
        <Route component={Homepage} />
      </Switch>
    </div>
  );
}
