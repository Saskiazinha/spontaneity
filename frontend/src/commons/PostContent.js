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
    if (status === "GREEN") {
      return "#2FAB63";
    }
    if (status === "YELLOW") {
      return "#EFD102";
    }
    if (status === "BLUE") {
      return "#0074B6";
    }
  }

  function renderCategoryIcon(color) {
    if (post.category === "Drinks") {
      return <BiDrink color={color} />;
    }
    if (post.category === "Meal") {
      return <GiMeal color={color} />;
    }
    if (post.category === "Events") {
      return <RiCalendarEventFill color={color} />;
    }
    if (post.category === "Exercise") {
      return <BiRun color={color} />;
    }
    if (post.category === "Outdoor") {
      return <GiMountains color={color} />;
    }
    if (post.category === "Party") {
      return <GiPartyFlags color={color} />;
    }
    if (post.category === "Party") {
      return <GiSofa color={color} />;
    }
  }
}

const ContentStyling = styled.div`
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
