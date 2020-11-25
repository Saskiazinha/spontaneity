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
import DetailsPage from "./detailsPage/DetailsPage";
import MyPostsToday from "./myPostsPages/MyPostsToday";
import MyPostsTomorrow from "./myPostsPages/MyPostsTomorrow";
import MyPostsDayAfterTomorrow from "./myPostsPages/MyPostsDayAfterTomorrow";

function App() {
  return (
    <UserContextProvider>
      <PostContextProvider>
        <Layout>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <ProtectedRoute path="/posts/today" component={PostsToday} />
            <ProtectedRoute path="/posts/tomorrow" component={PostsTomorrow} />
            <ProtectedRoute
              path="/posts/dayaftertomorrow"
              component={PostsDayAfterTomorrow}
            />
            <ProtectedRoute path="/myposts/today" component={MyPostsToday} />
            <ProtectedRoute
              path="/myposts/tomorrow"
              component={MyPostsTomorrow}
            />
            <ProtectedRoute
              path="/myposts/dayaftertomorrow"
              component={MyPostsDayAfterTomorrow}
            />
            <ProtectedRoute path="/posts/:id" component={DetailsPage} />
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

const Layout = styled.main`
  display: grid;
  grid-template-rows: 10% min-content 1fr 10%;
  height: 100vh;
`;
