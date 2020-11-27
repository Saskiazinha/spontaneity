import React, { useContext } from "react";
import PostContext from "../contexts/PostContext";
import { getDate } from "../utils/DateUtils";
import SpontaneityHeader from "../commons/SpontaneityHeader";
import NavigationHeader from "../commons/NavigationHeader";
import PostList from "../postsCommons/PostList";
import FooterMyPosts from "../commons/FooterMyPosts";

export default function MyPostsToday() {
  const { myPosts } = useContext(PostContext);
  const myPostsFiltered = myPosts.filter(
    (myPost) => myPost.localDate === getDate(1)
  );
  return (
    <>
      <SpontaneityHeader />
      <NavigationHeader
        title={"My Posts"}
        day={"Tomorrow"}
        postType={"myposts"}
      />
      <PostList posts={myPostsFiltered} />
      <FooterMyPosts />
    </>
  );
}
