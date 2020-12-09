import React from "react";
import styled from "styled-components/macro";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Friend({ friend, deleteFriend }) {
  return (
    <FriendStyled>
      <p>
        {friend.firstName} {friend.lastName}
      </p>
      <p>{friend.username}</p>
      <Button onClick={handleDelete}>
        <RiDeleteBin6Line />
      </Button>
    </FriendStyled>
  );
  function handleDelete() {
    deleteFriend(friend.username);
  }
}

const FriendStyled = styled.div``;

const Button = styled.button`
  height: 25px;
  width: 25px;
`;
