import React, { useContext, useState, useEffect } from "react";
import SpontaneityHeader from "../commons/navigation/SpontaneityHeader";
import NavigationHeader from "../commons/navigation/NavigationHeader";
import PostContext from "../contexts/PostContext";
import PostList from "../commons/PostList";
import { getDate } from "../utils/DateUtils";
import Footer from "../commons/navigation/Footer";
import { getMapsFilterButtons } from "../commons/navigation/MapsFilterButtons";

export default function FriendsPosts({ day, indexDay }) {
  const { posts, matchingPosts } = useContext(PostContext);
  const [postsToPass, setPostsToPass] = useState(posts);
  const [filterActive, setFilterActive] = useState(false);

  useEffect(() => {
    if (filterActive) {
      setPostsToPass(matchingPosts);
    }
    if (!filterActive) {
      setPostsToPass(posts);
    }
  }, [filterActive, posts, matchingPosts]);

  const filteredPosts = postsToPass.filter(
    (post) => post.localDate === getDate(indexDay)
  );
  return (
    <>
      <SpontaneityHeader />
      <NavigationHeader
        title={"Posts of Friends"}
        day={day}
        postType={"posts"}
      />
      <PostList posts={filteredPosts} />
      <Footer actions={getMapsFilterButtons(filterActive, setFilterActive)} />
    </>
  );
}
