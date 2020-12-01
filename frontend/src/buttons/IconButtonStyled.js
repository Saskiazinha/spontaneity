import styled, { css } from "styled-components/macro";

export const IconButtonStyled = styled.button`
  color: var(--white-main);
  background-color: transparent;
  border: none;

  ${(props) =>
    props.active &&
    css`
      border: 2px solid var(--white-main);
    `}
`;
