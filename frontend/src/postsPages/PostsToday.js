import React, { useContext } from "react";
import SpontaneityHeader from "../commons/SpontaneityHeader";
import NavigationHeader from "../commons/NavigationHeader";
import PostContext from "../contexts/PostContext";
import PostList from "../postsCommons/PostList";

export default function PostsToday() {
  const { posts } = useContext(PostContext);
  const filteredPosts = posts.filter(
    (post) => post.localDate == getDateToday()
  );
  return (
    <div>
      <SpontaneityHeader />
      <NavigationHeader title={"Posts of Friends"} day={"Today"} />
      <PostList posts={filteredPosts} />
    </div>
  );

  function getDateToday() {
    const date = new Date().toISOString().slice(0, 10);
    return date;
  }
}
