import React, { useContext } from "react";
import SpontaneityHeader from "../commons/SpontaneityHeader";
import NavigationHeader from "../commons/NavigationHeader";
import PostContext from "../contexts/PostContext";
import PostList from "../postsCommons/PostList";
import { getDate } from "../utils/DateUtils";
import Footer from "../commons/Footer";

export default function PostsDayAfterTomorrow() {
  const { posts } = useContext(PostContext);
  const filteredPosts = posts.filter((post) => post.localDate === getDate(2));
  return (
    <>
      <SpontaneityHeader />
      <NavigationHeader
        title={"Posts of Friends"}
        day={"Day After Tomorrow"}
        postType={"posts"}
      />
      <PostList posts={filteredPosts} />
      <Footer />
    </>
  );
}