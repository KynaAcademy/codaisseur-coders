// src/App.js
import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PostPage from "./pages/PostPage";
import SignUpPage from "./pages/Signup";

export default function App() {
  return (
    <div>
      <div>
        <Link to='/signup'>Sign up</Link>
      </div>
      <Switch>
        {/* more pages to be added here later */}
        <Route path='/post/:id' component={PostPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route component={Homepage} />
      </Switch>
    </div>
  );
}
