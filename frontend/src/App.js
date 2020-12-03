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
import MyPosts from "./postsPages/MyPosts";
import AddPostPage from "./postModification/AddPostPage";
import UpdatePostPage from "./postModification/UpdatePostPage";
import GoogleMapsPosts from "./googleMaps/GoogleMapsPosts";

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
            <ProtectedRoute path="/myposts/today">
              <MyPosts day={"Today"} indexDay={0} />
            </ProtectedRoute>
            <ProtectedRoute path="/myposts/tomorrow">
              <MyPosts day={"Tomorrow"} indexDay={1} />
            </ProtectedRoute>
            <ProtectedRoute path="/myposts/dayaftertomorrow">
              <MyPosts day={"Day After Tomorrow"} indexDay={2} />
            </ProtectedRoute>
            <ProtectedRoute path="/posts/:id" component={DetailsPage} />
            <ProtectedRoute path="/add" component={AddPostPage} />
            <ProtectedRoute path="/update:id" component={UpdatePostPage} />
            <ProtectedRoute path="/maps/today">
              <GoogleMapsPosts day={"Today"} />
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

const Layout = styled.main`
  display: grid;
  grid-template-rows: 50px min-content 1fr 50px;
  height: 100vh;
`;
