// src/pages/Homepage.js
import React, { useState } from "react";
import PostsFeed from "../components/PostsFeed";

export default function Homepage() {
  return (
    <div>
      <h1>Hello!</h1>
      <PostsFeed />
    </div>
  );
}
