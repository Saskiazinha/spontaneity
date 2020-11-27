import React, { useState, useEffect, useContext } from "react";
import PostContext from "./PostContext";
import {
  getPosts,
  getMyPosts,
  addPost,
  updatePost,
} from "../service/PostService";
import UserContext from "./UserContext";

export default function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
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

  const createPost = (
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
      .catch(console.log);

  const editPost = (
    id,
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
    }
    setPosts(newPosts);
  }

  return (
    <PostContext.Provider value={{ posts, myPosts, createPost, editPost }}>
      {children}
    </PostContext.Provider>
  );
}
