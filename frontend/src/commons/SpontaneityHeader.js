import React from "react";
import styled from "styled-components/macro";
import { MdMenu } from "react-icons/md";

export default function SpontaneityHeader() {
  return (
    <HeaderStyled>
      <button>{/*<MdMenu />*/}</button>
      <h1>Spontaneity</h1>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  justify-items: center;
  align-items: center;

  font-family: "Satisfy", sans-serif;
  font-size: 1rem;
  background-color: var(--turquoise-main);
  color: var(--white-main);

  h1 {
    margin: 0;
  }
`;
