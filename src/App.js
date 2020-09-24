// src/App.js
import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PostPageMe from "./pages/PostPageMe";
import LoginPage from "./pages/LoginPage";
import Toolbar from "./components/Toolbar";
import { useDispatch } from "react-redux";
import { bootstrapLoginState } from "./store/auth/actions";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState());
  }, [dispatch]);

  return (
    <div>
      <Toolbar />
      <Switch>
        {/* more pages to be added here later */}
        <Route path='/post/:id' component={PostPageMe} />
        <Route path='/login' component={LoginPage} />
        <Route component={Homepage} />
      </Switch>
    </div>
  );
}
