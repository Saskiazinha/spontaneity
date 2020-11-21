import React, { useContext } from "react";
import SpontaneityHeader from "../commons/SpontaneityHeader";
import NavigationHeader from "../commons/NavigationHeader";
import PostContext from "../contexts/PostContext";
import PostList from "../postsCommons/PostList";

export default function PostsTomorrow() {
  const { posts } = useContext(PostContext);
  const filteredPosts = posts.filter(
    (post) => post.localDate == getDateTomorrow()
  );
  return (
    <div>
      <SpontaneityHeader />
      <NavigationHeader title={"Posts of Friends"} day={"Tomorrow"} />
      <PostList posts={filteredPosts} />
    </div>
  );

  function getDateTomorrow() {
    const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    const date = tomorrow.toISOString().slice(0, 10);
    return date;
  }
}
