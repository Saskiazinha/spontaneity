import React from "react";
import styled from "styled-components/macro";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./security/LoginPage";
import FriendsPosts from "./postsPages/FriendsPosts";
import UserContextProvider from "./contexts/UserContextProvider";
import ProtectedRoute from "./routing/ProtectedRoute";
import SignUpPage from "./security/SignUpPage";
import PostContextProvider from "./contexts/PostContextProvider";
import DetailsPage from "./detailsPage/DetailsPage";
import MyPostsToday from "./myPostsPages/MyPostsToday";
import MyPostsTomorrow from "./myPostsPages/MyPostsTomorrow";
import MyPostsDayAfterTomorrow from "./myPostsPages/MyPostsDayAfterTomorrow";
import AddPostPage from "./postModification/AddPostPage";
import UpdatePostPage from "./postModification/UpdatePostPage";

function App() {
  return (
    <UserContextProvider>
      <PostContextProvider>
        <Layout>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignUpPage} />
            <ProtectedRoute path="/posts/today">
              <FriendsPosts day={"Today"} indexDay={0} />
            </ProtectedRoute>
            <ProtectedRoute path="/posts/tomorrow">
              <FriendsPosts day={"Tomorrow"} indexDay={1} />
            </ProtectedRoute>
            <ProtectedRoute path="/posts/dayaftertomorrow">
              <FriendsPosts day={"Day After Tomorrow"} indexDay={2} />
            </ProtectedRoute>
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
            <ProtectedRoute path="/add" component={AddPostPage} />
            <ProtectedRoute path="/update:id" component={UpdatePostPage} />
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
  grid-template-rows: 10% min-content 1fr 8%;
  height: 100vh;
`;
