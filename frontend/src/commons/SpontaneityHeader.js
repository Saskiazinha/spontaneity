import React from "react";
import styled from "styled-components/macro";

export default function SpontaneityHeader() {
  return (
    <HeaderStyled>
      <h1>Spontaneity</h1>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  text-align: center;
`;
