import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function NavigationHeader({ title, day, postType }) {
  const history = useHistory();
  return (
    <NavigationStyled>
      <NavigationButton
        disabled={history.location.pathname === "/" + postType + "/today"}
        onClick={handleBackwardsDirection}
      >
        <BsChevronLeft size={20} />
      </NavigationButton>
      <HeadlineStyled>
        <h2>{title}</h2>
        <h3>{day}</h3>
      </HeadlineStyled>
      <NavigationButton
        disabled={
          history.location.pathname === "/" + postType + "/dayaftertomorrow"
        }
        onClick={handleForwardDirection}
      >
        <BsChevronRight size={20} />
      </NavigationButton>
    </NavigationStyled>
  );

  function handleBackwardsDirection() {
    switch (history.location.pathname) {
      case "/" + postType + "/tomorrow":
        history.push("/" + postType + "/today");
        break;
      case "/" + postType + "/dayaftertomorrow":
        history.push("/" + postType + "/tomorrow");
        break;
      default:
        console.log("Something went wrong");
    }
  }

  function handleForwardDirection() {
    switch (history.location.pathname) {
      case "/" + postType + "/today":
        history.push("/" + postType + "/tomorrow");
        break;
      case "/" + postType + "/tomorrow":
        history.push("/" + postType + "/dayaftertomorrow");
        break;
      default:
        console.log("Something went wrong");
    }
  }
}

const NavigationStyled = styled.div`
  justify-self: center;
  display: grid;
  grid-template-columns: 50px 212px 50px;
  margin: var(--size-s) var(--size-xl);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 20px;

  h2,
  h3 {
    margin: 0;
  }
  h2 {
    color: var(--turquoise-green);
    font-size: 1.35rem;
  }
  h3 {
    font-size: 1.1em;
  }
`;

const HeadlineStyled = styled.div`
  align-items: center;
  text-align: center;
  padding: var(--size-s);
  color: var(--turquoise-main);
`;

const NavigationButton = styled.button`
  align-self: center;
  justify-self: center;
  height: 30px;
  width: 40px;
  color: var(--white-main);
  background-color: var(--turquoise-main);
  opacity: 1 !important;
  border-radius: 5px;
  border: none;

  &:disabled {
    background-color: var(--turquoise-bright);
  }
`;
