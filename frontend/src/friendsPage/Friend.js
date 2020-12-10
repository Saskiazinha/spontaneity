import React from "react";
import styled from "styled-components/macro";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Friend({ friend, deleteFriend }) {
  return (
    <FriendStyled>
      <Name>{friend.firstName + " " + friend.lastName}</Name>
      <Username>{friend.username}</Username>
      <Button onClick={handleDelete}>
        <RiDeleteBin6Line />
      </Button>
    </FriendStyled>
  );
  function handleDelete() {
    deleteFriend(friend.username);
  }
}

const FriendStyled = styled.div`
  display: grid;
  grid-template-rows: min-content min-content;
  grid-template-columns: 280px min-content;
  align-items: center;
  border-radius: 15px;
  box-shadow: 3px 3px 3px #95b0b4;
  background-color: var(--turquoise-bright);
  padding: var(--size-s) var(--size-l);
`;

const Name = styled.p`
  grid-row: 1;
  font-weight: bold;
  font-size: 0.82em;
  margin: 0;
`;

const Username = styled.p`
  grid-row: 2;
  margin: 0;
  font-size: 0.8em;
`;

const Button = styled.button`
  height: 25px;
  width: 25px;
  grid-row: 2;
`;
