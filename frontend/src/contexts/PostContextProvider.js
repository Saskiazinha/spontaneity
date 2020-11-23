import React, { useState, useEffect, useContext } from "react";
import PostContext from "./PostContext";
import { getPosts } from "../service/PostService";
import UserContext from "./UserContext";

export default function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const { token, tokenIsValid } = useContext(UserContext);

  useEffect(() => {
    tokenIsValid() &&
      getPosts(token)
        .then((posts) => setPostsWithoutSeconds(posts))
        .catch(console.log);
  }, [token, tokenIsValid]);

  function setPostsWithoutSeconds(posts) {
    const newPosts = posts.map((post) => {
      return {
        ...post,
        startPoint: post.startPoint.slice(0, 5),
        endPoint: post.endPoint.slice(0, 5),
      };
    });
    setPosts(newPosts);
  }

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
}
