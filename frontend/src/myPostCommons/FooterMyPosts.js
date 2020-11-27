import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import { IconButtonStyled } from "../buttons/IconButtonStyled";

export default function FooterMyPosts() {
  const history = useHistory();
  return (
    <FooterStyled>
      <IconButtonStyled onClick={() => history.push("/add")}>
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
