import React from "react";
import styled from "styled-components/macro";
import { BsPlusCircle } from "react-icons/bs";
import { IconButtonStyled } from "../styling/IconButtonStyled";

export default function FooterMyPosts() {
  return (
    <FooterStyled>
      <IconButtonStyled>
        <BsPlusCircle size={40} />
      </IconButtonStyled>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  display: grid;
  justify-items: center;
  background-color: var(--turquoise-main);
  color: var(--white-main);
`;
