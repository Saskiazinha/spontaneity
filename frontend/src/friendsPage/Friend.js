import React from "react";
import styled from "styled-components/macro";

export default function Friend({ friend }) {
  return (
    <FriendStyled>
      <p>
        {friend.firstName} {friend.lastName}
      </p>
      <p>{friend.username}</p>
    </FriendStyled>
  );
}

const FriendStyled = styled.div``;
