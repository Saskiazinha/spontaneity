import React from "react";
import styled from "styled-components/macro";
import SpontaneityHeader from "../commons/navigation/SpontaneityHeader";
import Footer from "../commons/navigation/Footer";
import Header from "../commons/Header";
import useFriends from "../hooks/FriendsHook";

export default function FriendsPage() {
  const [friends, addNewFriend, deleteFriend] = useFriends();
  return (
    <>
      <SpontaneityHeader />
      <Header title="Your friends" />
      <FriendsLayout>
        <div>
          <label>
            Add friend
            <input />
          </label>
        </div>
        <div>friends</div>
      </FriendsLayout>
      <Footer />
    </>
  );
}

const FriendsLayout = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-row-gap: var(--size-m);
  justify-content: center;
`;
