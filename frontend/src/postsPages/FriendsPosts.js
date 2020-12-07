import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/macro";
import SpontaneityHeader from "../commons/navigation/SpontaneityHeader";
import NavigationHeader from "../commons/navigation/NavigationHeader";
import PostContext from "../contexts/PostContext";
import PostList from "../commons/PostList";
import { getDate } from "../utils/DateUtils";
import Footer from "../commons/navigation/Footer";
import { IconButtonStyled } from "../buttons/IconButtonStyled";
import { SiGooglemaps } from "react-icons/si";
import { MdGroup } from "react-icons/md";
import { useHistory } from "react-router-dom";

export default function FriendsPosts({ day, indexDay }) {
  const history = useHistory();
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
      <PostList posts={filteredPosts} renderName={true} />
      <Footer actions={getMapsFilterButtons()} />
    </>
  );

  function getMapsFilterButtons() {
    return [
      <IconButtonStyled
        key="filter"
        onClick={() => setFilterActive(!filterActive)}
        active={filterActive}
      >
        <IconClock src="/images/peopleClock.png" alt="clocks" />
      </IconButtonStyled>,
      <IconButtonStyled
        key="maps"
        onClick={() =>
          history.push("/maps/" + day.toLowerCase().replace(/\s+/g, ""))
        }
      >
        <SiGooglemaps size={30} />
      </IconButtonStyled>,
    ];
  }
}

const IconClock = styled.img`
  width: 33px;
`;
