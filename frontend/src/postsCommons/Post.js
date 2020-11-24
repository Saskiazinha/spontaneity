import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import Button from "../commons/Button";
import { BsClockHistory } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { BiDrink, BiRun } from "react-icons/bi";
import { GiMeal, GiMountains, GiPartyFlags, GiSofa } from "react-icons/gi";
import { RiCalendarEventFill } from "react-icons/ri";

export default function Post({ post }) {
  const history = useHistory();
  return (
    <PostStyled>
      <NameStyling>{post.creator}</NameStyling>
      <Button onClick={() => history.push("/posts/" + post.id)}>Details</Button>
      <ContentStyling>
        <div>
          <Icon>
            <BsClockHistory />
          </Icon>
          <Content>
            {post.startPoint} - {post.endPoint}
          </Content>
        </div>
        <div>
          <Icon>{renderCategoryIcon()}</Icon>
          <Content>{post.category}</Content>
        </div>
        <div>
          <Icon>
            <SiGooglemaps />
          </Icon>
          <Content>{post.location}</Content>
        </div>
      </ContentStyling>
    </PostStyled>
  );

  function renderCategoryIcon() {
    switch (post.category) {
      case "Drinks":
        return <BiDrink />;
      case "Meal":
        return <GiMeal />;
      case "Events":
        return <RiCalendarEventFill />;
      case "Exercise":
        return <BiRun />;
      case "Outdoor":
        return <GiMountains />;
      case "Party":
        return <GiPartyFlags />;
      case "Hangout":
        return <GiSofa />;
      default:
        console.log("Something went wrong");
    }
  }
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
    grid-column: 3 / 3;

    justify-self: end;
  }
`;

const NameStyling = styled.h4`
  grid-row: 1;
  grid-column: 2 / 2;
  align-self: center;
  justify-self: center;
  font-size: 1.1em;
  font-weight: bold;
`;

const ContentStyling = styled.div`
  grid-row: 2 / 2;
  grid-column: span 3;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  text-align: center;
`;

const Icon = styled.p`
  margin: 0;
  font-size: 25px;
`;

const Content = styled.p`
  margin: 0;
  font-size: 0.8em;
`;
