// src/App.js
import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const NavBar = () => {
  return (
    <div>
      <Link to='/' style={{ marginRight: 15 }}>
        Home
      </Link>
      <Link to='/login' style={{ marginRight: 15 }}>
        Login
      </Link>
      <Link to='/signup'>Signup</Link>
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
