import React, { useContext } from "react";
import SpontaneityHeader from "../commons/SpontaneityHeader";
import NavigationHeader from "../commons/NavigationHeader";
import PostContext from "../contexts/PostContext";
import PostList from "../postsCommons/PostList";

export default function PostsDayAfterTomorrow() {
  const { posts } = useContext(PostContext);
  const filteredPosts = posts.filter(
    (post) => post.localDate == getDateOvertomorrow()
  );
  return (
    <div>
      <SpontaneityHeader />
      <NavigationHeader title={"Posts of Friends"} day={"Day After Tomorrow"} />
      <PostList posts={filteredPosts} />
    </div>
  );

  function getDateOvertomorrow() {
    const overtomorrow = new Date();
    overtomorrow.setDate(new Date().getDate() + 2);
    const date = overtomorrow.toISOString().slice(0, 10);
    return date;
  }
}
