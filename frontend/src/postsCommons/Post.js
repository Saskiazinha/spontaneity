import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

export default function Post({ post }) {
  const history = useHistory();
  return (
    <PostStyled>
      <NameStyling>{post.creator}</NameStyling>
      <ContentStyling>
        <p>
          {post.startPoint} - {post.endPoint}
        </p>
        <p>{post.category} </p>
        <p>{post.location}</p>
      </ContentStyling>
      <DetailsButton onClick={() => history.push("/posts/" + post.id)}>
        Details
      </DetailsButton>
    </PostStyled>
  );
}

const PostStyled = styled.div`
  display: grid;
  grid-template-rows: 30px 1fr 25px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-radius: 20px;
  box-shadow: 3px 3px 3px #95b0b4;
  background-color: var(--turquoise-bright);
`;

const NameStyling = styled.p`
  justify-self: center;
  align-self: center;
  grid-row: 1 / 1;
  grid-column: 2 / span 1;
`;

const ContentStyling = styled.div`
  grid-row: 2 / 2;
  grid-column: span 3;
  display: flex;
  justify-content: space-evenly;
`;

const DetailsButton = styled.button`
  grid-column: 3 / 3;
  grid-row: 3;
`;
