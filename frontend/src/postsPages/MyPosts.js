import React, { useContext } from "react";
import PostContext from "../contexts/PostContext";
import { getDate } from "../utils/DateUtils";
import SpontaneityHeader from "../commons/navigation/SpontaneityHeader";
import NavigationHeader from "../commons/navigation/NavigationHeader";
import PostList from "../commons/PostList";
import FooterMyPosts from "../commons/navigation/FooterMyPosts";

export default function MyPosts({ day, indexDay }) {
  const { myPosts } = useContext(PostContext);
  const myPostsFiltered = myPosts.filter(
    (myPost) => myPost.localDate === getDate(indexDay)
  );
  return (
    <>
      <SpontaneityHeader />
      <NavigationHeader title={"My Posts"} day={day} postType={"myposts"} />
      <PostList posts={myPostsFiltered} />
      <FooterMyPosts />
    </>
  );
}
