import React, { useContext } from "react";
import PostContext from "../contexts/PostContext";
import { getDate } from "../utils/DateUtils";
import SpontaneityHeader from "../commons/SpontaneityHeader";
import NavigationHeader from "../commons/NavigationHeader";
import PostList from "../commons/PostList";
import FooterMyPosts from "../myPostCommons/FooterMyPosts";

export default function MyPostsDayAfterTomorrow() {
  const { myPosts } = useContext(PostContext);
  const myPostsFiltered = myPosts.filter(
    (myPost) => myPost.localDate === getDate(2)
  );
  return (
    <>
      <SpontaneityHeader />
      <NavigationHeader
        title={"My Posts"}
        day={"Day After Tomorrow"}
        postType={"myposts"}
      />
      <PostList posts={myPostsFiltered} />
      <FooterMyPosts />
    </>
  );
}
