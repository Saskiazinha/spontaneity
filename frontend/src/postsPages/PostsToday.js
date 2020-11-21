import React, { useContext } from "react";
import SpontaneityHeader from "../commons/SpontaneityHeader";
import NavigationHeader from "../commons/NavigationHeader";
import PostContext from "../contexts/PostContext";
import PostList from "../postsCommons/PostList";

export default function PostsToday() {
  const { posts } = useContext(PostContext);
  // const filteredPostsToday=posts.filter((post)=>post.creator);
  return (
    <div>
      <SpontaneityHeader />
      <NavigationHeader title={"Posts of Friends"} day={"Today"} />
      <PostList posts={posts} />
    </div>
  );
}
