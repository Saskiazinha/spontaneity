import React from "react";
import styled from "styled-components/macro";

export default function Button({ children, ...rest }) {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
}

const ButtonStyled = styled.button`
  background-color: var(--turquoise-main);
  color: var(--white-main);
  border-radius: 5px;
  border: none;
  width: 70px;
  height: 25px;
`;
