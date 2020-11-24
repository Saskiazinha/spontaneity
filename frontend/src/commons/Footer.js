import React from "react";
import styled from "styled-components/macro";

export default function Footer() {
  return (
    <FooterStyled>
      <p>Filter</p>
      <p>Maps</p>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  display: grid;
  grid-template-columns: 25% 1fr 25%;
  align-items: center;
  justify-items: center;
  background-color: var(--turquoise-main);
  color: var(--white-main);

  p {
    margin: 0;
  }

  p:last-child {
    grid-column-start: 3;
  }
`;
