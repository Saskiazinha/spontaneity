import styled from "styled-components/macro";

export const FooterStyled = styled.div`
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
