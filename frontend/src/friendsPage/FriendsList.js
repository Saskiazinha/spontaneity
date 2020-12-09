import React from "react";
import styled from "styled-components/macro";
import Friend from "./Friend";

export default function FriendsList({ friends }) {
  return (
    <StyledList>
      {friends?.map((friend) => (
        <li key={friend.username}>
          <Friend friend={friend} />
        </li>
      ))}
    </StyledList>
  );
}

const StyledList = styled.div`
  list-style: none;
  overflow: scroll;
`;
