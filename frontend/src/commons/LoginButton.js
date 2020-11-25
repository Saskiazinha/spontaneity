import React from "react";
import styled from "styled-components/macro";

export default function LoginButton({ children, ...rest }) {
  return <LoginButtonStyled {...rest}>{children}</LoginButtonStyled>;
}

const LoginButtonStyled = styled.button`
  width: 100%;
  font-size: 16px;
  background-color: var(--turquoise-bright);
  color: var(--turquoise-grey);
  border-radius: 7px;
  border: none;
`;
