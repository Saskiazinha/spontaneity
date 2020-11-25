import React from "react";
import styled from "styled-components/macro";
import { GiHamburgerMenu } from "react-icons/gi";

export default function SpontaneityHeader() {
  return (
    <HeaderStyled>
      <MenuButton>
        <GiHamburgerMenu size={30} />
      </MenuButton>
      <h1>Spontaneity</h1>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  justify-items: center;
  align-items: center;
  background-color: var(--turquoise-main);

  h1 {
    margin: 0;
  }
`;

const MenuButton = styled.button`
  color: var(--white-main);
  background-color: transparent;
  border: none;
`;
