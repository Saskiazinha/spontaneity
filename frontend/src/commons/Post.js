import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import PostContent from "./PostContent";

export default function Post({ post, renderName }) {
  const history = useHistory();
  return (
    <PostStyled onClick={() => history.push("/posts/" + post.id)}>
      <TitleStyling>{post.title}</TitleStyling>
      <NameStyling>{renderName && <p>{post.creator}</p>}</NameStyling>
      <PostContent post={post} />
    </PostStyled>
  );
}

const PostStyled = styled.button`
  display: grid;
  grid-template-rows: 40px 38px 1fr;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-radius: 20px;
  box-shadow: 3px 3px 3px #95b0b4;
  background-color: var(--turquoise-bright);
  color: var(--turquoise-grey);
  padding: var(--size-s);
  width: 100%;
`;

const TitleStyling = styled.h3`
  grid-row: 1;
  grid-column: 2;
`;

const NameStyling = styled.h4`
  grid-row: 2;
  grid-column: 2;
  align-self: center;
  justify-self: center;
  font-size: 1.1em;
  font-weight: bold;
  color: var(--turquoise-main);
  letter-spacing: 0.1em;
`;
