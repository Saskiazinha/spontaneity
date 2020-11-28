import React, { useContext } from "react";
import SpontaneityHeader from "../commons/navigation/SpontaneityHeader";
import NavigationHeader from "../commons/navigation/NavigationHeader";
import PostContext from "../contexts/PostContext";
import PostList from "../commons/PostList";
import { getDate } from "../utils/DateUtils";
import Footer from "../commons/Footer";
import { getMapsFilterButtons } from "../postsCommons/MapsFilterButtons";

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
      <Footer actions={getMapsFilterButtons()} />
    </>
  );
}
