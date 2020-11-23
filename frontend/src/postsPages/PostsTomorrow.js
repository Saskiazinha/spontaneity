import React, { useContext } from "react";
import SpontaneityHeader from "../commons/SpontaneityHeader";
import NavigationHeader from "../commons/NavigationHeader";
import PostContext from "../contexts/PostContext";
import PostList from "../postsCommons/PostList";
import { getDate } from "../utils/DateUtils";
import Footer from "../commons/Footer";

export default function PostsTomorrow() {
  const { posts } = useContext(PostContext);
  const filteredPosts = posts.filter((post) => post.localDate === getDate(1));
  return (
    <>
      <SpontaneityHeader />
      <NavigationHeader
        title={"Posts of Friends"}
        day={"Tomorrow"}
        postType={"posts"}
      />
      <PostList posts={filteredPosts} />
      <Footer />
    </>
  );
}
