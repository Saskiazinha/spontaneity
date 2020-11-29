import React from "react";
import styled from "styled-components/macro";

export default function Header({ title }) {
  return (
    <div>
      <HeaderStyled>{title}</HeaderStyled>
    </div>
  );
}

const HeaderStyled = styled.h3`
  margin: var(--size-xs) 0 var(--size-l) 0;
  text-align: center;
  font-size: 1.4em;
  color: #005e69;
`;
