import React from "react";
import styled from "styled-components/macro";

export default function Footer({ actions }) {
  return <FooterStyled>{actions}</FooterStyled>;
}

const FooterStyled = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 35% 1fr 35%;
  align-items: center;
  justify-items: center;
  background-color: var(--turquoise-main);
  color: var(--white-main);

  button:last-child {
    grid-column-start: 3;
  }
`;
