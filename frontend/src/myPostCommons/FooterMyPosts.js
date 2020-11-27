import React from "react";
import styled from "styled-components/macro";
import { BsPlusCircle } from "react-icons/bs";
import { IconButtonStyled } from "../buttons/IconButtonStyled";

export default function FooterMyPosts() {
  return (
    <FooterStyled>
      <IconButtonStyled>
        <BsPlusCircle size={38} />
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
