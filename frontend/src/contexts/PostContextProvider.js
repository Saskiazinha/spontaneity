import React, { useState, useEffect, useContext } from "react";
import PostContext from "./PostContext";
import { getPosts } from "../service/PostService";
import UserContext from "./UserContext";

export default function PostContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const { token, tokenIsValid } = useContext(UserContext);

  useEffect(() => {
    tokenIsValid() && getPosts(token).then(setPosts).catch(console.log);
  }, [token, tokenIsValid]);

  return <PostContext.Provider value={posts}>{children}</PostContext.Provider>;
}
