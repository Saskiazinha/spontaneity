import React from "react";
import styled from "styled-components/macro";
import Friend from "./Friend";

export default function FriendsList({ friends, deleteFriend }) {
  return (
    <StyledList>
      {friends?.map((friend) => (
        <li key={friend.username}>
          <Friend friend={friend} deleteFriend={deleteFriend} />
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.div`
  list-style: none;
  width: 100%;

  display: grid;
  grid-auto-rows: min-content;
  gap: var(--size-m);
  padding: 0 var(--size-xl) var(--size-s) var(--size-xl);
  //margin: 0 var(--size-xl);

  li:last-child:after {
    content: "";
    display: block;
    height: var(--size-m);
  }
`;
