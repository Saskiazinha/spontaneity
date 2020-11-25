import React from "react";
import styled from "styled-components/macro";
import { SiGooglemaps } from "react-icons/si";
import { MdFilterList } from "react-icons/md";

export default function Footer() {
  return (
    <FooterStyled>
      <ButtonStyled>
        <MdFilterList size={40} />
      </ButtonStyled>
      <ButtonStyled>
        <SiGooglemaps size={35} />
      </ButtonStyled>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr 30%;
  align-items: center;
  justify-items: center;
  background-color: var(--turquoise-main);
  color: var(--white-main);

  button:last-child {
    grid-column-start: 3;
  }
`;

const ButtonStyled = styled.button`
  color: var(--white-main);
  background-color: transparent;
  border: none;
`;
