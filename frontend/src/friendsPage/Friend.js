import React from "react";
import styled from "styled-components/macro";

export default function Friend({ friend, deleteFriend }) {
  return (
    <FriendStyled>
      <p>
        {friend.firstName} {friend.lastName}
      </p>
      <p>{friend.username}</p>
      <button onClick={handleDelete}>delete</button>
    </FriendStyled>
  );
  function handleDelete() {
    deleteFriend(friend.username);
  }
}

const FriendStyled = styled.div``;
