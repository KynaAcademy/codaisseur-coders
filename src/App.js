// src/App.js
import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <div>
      <Switch>
        {/* more pages to be added here later */}
        <Route path="/post/:id" component={PostPage} />
        <Route component={Homepage} />
      </Switch>
    </div>
  );
}
