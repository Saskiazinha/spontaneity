import React, { useState, useEffect, useContext } from "react";
import PostContext from "./PostContext";
import {
  getPosts,
  getMyPosts,
  addPost,
  updatePost,
  removePost,
  getTimeMatchingPosts,
} from "../service/PostService";
import UserContext from "./UserContext";

export default function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [matchingPosts, setMatchingPosts] = useState([]);
  const { token, tokenIsValid } = useContext(UserContext);

  useEffect(() => {
    tokenIsValid() &&
      getPosts(token)
        .then((posts) => setPostsWithoutSeconds(posts, "posts"))
        .catch(console.log);
  }, [token, tokenIsValid]);

  useEffect(() => {
    tokenIsValid() &&
      getMyPosts(token)
        .then((myPosts) => setPostsWithoutSeconds(myPosts, "myPosts"))
        .catch(console.log);
  }, [token, tokenIsValid]);

  useEffect(() => {
    tokenIsValid() &&
      getTimeMatchingPosts(token)
        .then((matchingPosts) =>
          setPostsWithoutSeconds(matchingPosts, "matchingPosts")
        )
        .catch(console.log);
  }, [token, tokenIsValid]);

  const createPost = (
    title,
    localDate,
    startPoint,
    endPoint,
    statusTime,
    location,
    statusLocation,
    category,
    statusCategory,
    notes
  ) =>
    addPost(
      title,
      localDate,
      startPoint,
      endPoint,
      statusTime,
      location,
      statusLocation,
      category,
      statusCategory,
      notes,
      token
    )
      .then((newPost) =>
        setPostsWithoutSeconds([...myPosts, newPost], "myPosts")
      )
      .then(() =>
        getMyPosts(token).then((myPosts) =>
          setPostsWithoutSeconds(myPosts, "myPosts")
        )
      )
      .then(() =>
        getTimeMatchingPosts(token).then((matchingPosts) =>
          setPostsWithoutSeconds(matchingPosts, "matchingPosts")
        )
      )
      .catch(console.log);

  const editPost = (
    id,
    title,
    localDate,
    startPoint,
    endPoint,
    statusTime,
    location,
    statusLocation,
    category,
    statusCategory,
    notes
  ) =>
    updatePost(
      id,
      title,
      localDate,
      startPoint,
      endPoint,
      statusTime,
      location,
      statusLocation,
      category,
      statusCategory,
      notes,
      token
    )
      .then((updatedPost) =>
        setPostsWithoutSeconds(
          [
            ...myPosts.filter((post) => post.id !== updatedPost.id),
            updatedPost,
          ],
          "myPosts"
        )
      )
      .then(() =>
        getMyPosts(token).then((myPosts) =>
          setPostsWithoutSeconds(myPosts, "myPosts")
        )
      )
      .then(() =>
        getTimeMatchingPosts(token).then((matchingPosts) =>
          setPostsWithoutSeconds(matchingPosts, "matchingPosts")
        )
      )
      .catch(console.log);

  const deletePost = (id) =>
    removePost(id, token)
      .then(() =>
        setPostsWithoutSeconds(
          myPosts.filter((myPost) => myPost.id !== id),
          "myPosts"
        )
      )
      .catch(console.log);

  function setPostsWithoutSeconds(posts, kind) {
    const newPosts = posts.map((post) => {
      return {
        ...post,
        startPoint: post.startPoint.slice(0, 5),
        endPoint: post.endPoint.slice(0, 5),
      };
    });
    if (kind === "myPosts") {
      setMyPosts(newPosts);
    } else if (kind === "matchingPosts") {
      setMatchingPosts(newPosts);
    } else {
      setPosts(newPosts);
    }
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        myPosts,
        matchingPosts,
        createPost,
        editPost,
        deletePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
