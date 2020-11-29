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
  overflow: scroll;
  padding: 0 var(--size-xl) var(--size-s) var(--size-xl);
  font-size: 0.9rem;

  display: grid;
  grid-auto-rows: min-content;
  gap: var(--size-m);

  li:last-child:after {
    content: "";
    display: block;
    height: var(--size-m);
  }
`;
