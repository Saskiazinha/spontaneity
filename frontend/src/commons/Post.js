import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import Button from "../buttons/Button";
import PostContent from "./PostContent";

export default function Post({ post }) {
  const history = useHistory();
  return (
    <PostStyled>
      <NameStyling>{post.creator}</NameStyling>
      <Button onClick={() => history.push("/posts/" + post.id)}>Details</Button>
      <PostContent post={post} />
    </PostStyled>
  );
}

const PostStyled = styled.div`
  display: grid;
  grid-template-rows: 38px 1fr;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-radius: 20px;
  box-shadow: 3px 3px 3px #95b0b4;
  background-color: var(--turquoise-bright);
  padding: var(--size-s);

  button {
    grid-row: 1;
    grid-column: 3;

    justify-self: end;
  }
`;

const NameStyling = styled.h4`
  grid-row: 1;
  grid-column: 2;
  align-self: center;
  justify-self: center;
  font-size: 1.1em;
  font-weight: bold;
  color: var(--turquoise-main);
  letter-spacing: 0.2em;
`;
