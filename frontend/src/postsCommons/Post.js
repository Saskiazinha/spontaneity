import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import Button from "../commons/Button";
import { IoMdClock } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import { BiDrink, BiRun } from "react-icons/bi";
import { GiMeal, GiMountains, GiPartyFlags, GiSofa } from "react-icons/gi";
import { RiCalendarEventFill } from "react-icons/ri";

export default function Post({ post }) {
  const history = useHistory();
  const time = "time";
  const category = "category";
  const location = "location";
  return (
    <PostStyled>
      <NameStyling>{post.creator}</NameStyling>
      <Button onClick={() => history.push("/posts/" + post.id)}>Details</Button>
      <ContentStyling>
        <div>
          <Icon>{renderIcon(time)}</Icon>
          <Content>
            {post.startPoint} - {post.endPoint}
          </Content>
        </div>
        <div>
          <Icon>{renderIcon(category)}</Icon>
          <Content>{post.category}</Content>
        </div>
        <div>
          <Icon>{renderIcon(location)}</Icon>
          <Content>{post.location}</Content>
        </div>
      </ContentStyling>
    </PostStyled>
  );

  function renderIcon(icon) {
    if (icon === time) {
      return <IoMdClock color={getStatusColor(post.statusTime)} />;
    }
    if (icon === category) {
      const color = getStatusColor(post.statusCategory);
      return renderCategoryIcon(color);
    }
    if (icon === location) {
      return <SiGooglemaps color={getStatusColor(post.statusLocation)} />;
    }
  }

  function getStatusColor(status) {
    switch (status) {
      case "GREEN":
        return "#2FAB63";
      case "YELLOW":
        return "#EFD102";
      case "BLUE":
        return "#0074B6";
      default:
        console.log("Something went wrong");
    }
  }

  function renderCategoryIcon(color) {
    switch (post.category) {
      case "Drinks":
        return <BiDrink color={color} />;
      case "Meal":
        return <GiMeal color={color} />;
      case "Events":
        return <RiCalendarEventFill color={color} />;
      case "Exercise":
        return <BiRun color={color} />;
      case "Outdoor":
        return <GiMountains color={color} />;
      case "Party":
        return <GiPartyFlags color={color} />;
      case "Hangout":
        return <GiSofa color={color} />;
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
