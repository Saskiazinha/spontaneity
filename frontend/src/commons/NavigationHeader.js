import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

export default function NavigationHeader({ title, day, postType }) {
  const history = useHistory();
  return (
    <NavigationStyled>
      <button
        disabled={history.location.pathname === "/" + postType + "/today"}
        onClick={handleBackwardsDirection}
      >
        Icon
      </button>
      <div>
        <h2>{title}</h2>
        <h3>{day}</h3>
      </div>
      <button
        disabled={
          history.location.pathname === "/" + postType + "/dayaftertomorrow"
        }
        onClick={handleForwardDirection}
      >
        Icon
      </button>
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
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  padding: var(--size-m);

  div {
    justify-self: center;
    align-items: center;
    text-align: center;
  }

  button {
    height: 30px;
    align-self: center;
  }
`;
