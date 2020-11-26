import React from "react";
import styled from "styled-components/macro";
import { SiGooglemaps } from "react-icons/si";
import { MdFilterList } from "react-icons/md";
import { FooterStyled } from "../styling/FooterStyling";

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

const ButtonStyled = styled.button`
  color: var(--white-main);
  background-color: transparent;
  border: none;
`;
