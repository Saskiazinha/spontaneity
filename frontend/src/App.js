import React from "react";
import styled from "styled-components/macro";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./security/LoginPage";
import PostsToday from "./postsPages/PostsToday";
import UserContextProvider from "./contexts/UserContextProvider";
import ProtectedRoute from "./routing/ProtectedRoute";
import SignUpPage from "./security/SignUpPage";
import PostsTomorrow from "./postsPages/PostsTomorrow";
import PostsDayAfterTomorrow from "./postsPages/PostsDayAfterTomorrow";
import PostContextProvider from "./contexts/PostContextProvider";

function App() {
  return (
    <UserContextProvider>
      <PostContextProvider>
        <Layout>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <ProtectedRoute path="/posts/today">
              <PostsToday />
            </ProtectedRoute>
            <ProtectedRoute path="/posts/tomorrow">
              <PostsTomorrow />
            </ProtectedRoute>
            <ProtectedRoute path="/posts/dayaftertomorrow">
              <PostsDayAfterTomorrow />
            </ProtectedRoute>
            <Route path="/">
              <Redirect to="/posts/today" />
            </Route>
          </Switch>
        </Layout>
      </PostContextProvider>
    </UserContextProvider>
  );
}

export default App;

const Layout = styled.div`
  display: grid;
  //grid-template-rows: ;
`;
