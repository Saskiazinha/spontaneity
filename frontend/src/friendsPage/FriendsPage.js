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
          <label>
            Add friend
            <input
              value={friendUsername}
              onChange={(event) => setFriendUsername(event.target.value)}
            />
          </label>
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
  grid-row-gap: var(--size-m);
  justify-content: center;
`;
