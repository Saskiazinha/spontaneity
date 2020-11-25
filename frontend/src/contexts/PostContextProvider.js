import React, { useState, useEffect, useContext } from "react";
import PostContext from "./PostContext";
import { getPosts } from "../service/PostService";
import { getMyPosts } from "../service/PostService";
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
    <PostContext.Provider value={{ posts, myPosts }}>
      {children}
    </PostContext.Provider>
  );
}
