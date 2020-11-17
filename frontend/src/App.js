import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./loginPage/LoginPage";
import PostsToday from "./postsPages/PostsToday";
import UserContextProvider from "./contexts/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/home">
          <PostsToday />
        </Route>
      </Switch>
    </UserContextProvider>
  );
}

export default App;
