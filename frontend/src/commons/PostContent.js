import React from "react";
import styled from "styled-components/macro";
import { IoMdClock } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";
import { BiDrink, BiRun } from "react-icons/bi";
import { GiMeal, GiMountains, GiPartyFlags, GiSofa } from "react-icons/gi";
import { RiCalendarEventFill } from "react-icons/ri";

export default function PostContent({ post }) {
  const time = "time";
  const category = "category";
  const location = "location";
  return (
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

const ContentStyling = styled.div`
  grid-row: 2;
  grid-row: 2;
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
