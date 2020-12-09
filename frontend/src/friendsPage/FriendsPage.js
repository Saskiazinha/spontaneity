import React, { useState } from "react";
import styled from "styled-components/macro";
import SpontaneityHeader from "../commons/navigation/SpontaneityHeader";
import Footer from "../commons/navigation/Footer";
import Header from "../commons/Header";
import useFriends from "../hooks/FriendsHook";
import FriendsList from "./FriendsList";

export default function FriendsPage() {
  const [friends, addNewFriend, deleteFriend] = useFriends();
  const [friendUsername, setFriendUsername] = useState("");
  return (
    <>
      <SpontaneityHeader />
      <Header title="Your friends" />
      <FriendsLayout>
        <form onSubmit={handleSubmit}>
          <LabelStyled>
            Add friend
            <input
              value={friendUsername}
              onChange={(event) => setFriendUsername(event.target.value)}
              placeholder="enter username"
            />
          </LabelStyled>
        </form>
        <FriendsList friends={friends} deleteFriend={deleteFriend} />
      </FriendsLayout>
      <Footer />
    </>
  );

  function handleSubmit(event) {
    event.preventDefault();
    addNewFriend(friendUsername);
    console.log("submit");
  }
}

const FriendsLayout = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-columns: 1fr;
  grid-row-gap: var(--size-m);
  justify-items: center;
  padding: var(--size-m) var(size-xxl);
`;

const LabelStyled = styled.label`
  display: grid;
  justify-items: center;
  font-weight: bold;

  input {
    margin-top: 1px;
    text-align: center;
    width: 200px;
    height: 25px;
    border-radius: 5px;
    border: var(--turquoise-main) solid 1px;
  }
`;
