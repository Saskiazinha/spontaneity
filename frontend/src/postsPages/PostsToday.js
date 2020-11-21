import React, { useContext } from "react";
import SpontaneityHeader from "../commons/SpontaneityHeader";
import NavigationHeader from "../commons/NavigationHeader";
import PostContext from "../contexts/PostContext";
import PostList from "../postsCommons/PostList";

export default function PostsToday() {
  const { posts } = useContext(PostContext);
  let date = new Date().toISOString().slice(0, 10);
  const filteredPostsToday = posts.filter((post) => post.localDate == date);
  return (
    <div>
      <SpontaneityHeader />
      <NavigationHeader title={"Posts of Friends"} day={"Today"} />
      <PostList posts={filteredPostsToday} />
    </div>
  );
}
