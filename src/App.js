// src/App.js
import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PostPage from "./pages/PostPage";
import SignUpPage from "./pages/Signup";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <div>
      <div>
        <Link to='/signup' style={{ marginRight: 10 }}>
          Sign up
        </Link>
        <Link to='/login' style={{ marginRight: 10 }}>
          Login
        </Link>
        <Link to='/' style={{ marginRight: 10 }}>
          Home
        </Link>
      </div>
      <Switch>
        {/* more pages to be added here later */}
        <Route path='/post/:id' component={PostPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/login' component={LoginPage} />
        <Route component={Homepage} />
      </Switch>
    </div>
  );
}
