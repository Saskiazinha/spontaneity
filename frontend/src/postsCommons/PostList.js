import React from "react";
import Post from "./Post";
import styled from "styled-components/macro";

export default function PostList({ posts }) {
  return (
    <StyledList>
      {posts?.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.div`
  list-style: none;
`;
