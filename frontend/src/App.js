import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./loginPage/LoginPage";
import PostsToday from "./postsPages/PostsToday";

function App() {
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/home">
        <PostsToday />
      </Route>
    </Switch>
  );
}

export default App;
