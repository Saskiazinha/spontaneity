import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

export default function NavigationHeader({ title, day }) {
  const history = useHistory();
  return (
    <NavigationStyled>
      <button
        disabled={history.location.pathname === "/posts/today"}
        onClick={handleBackwardsDirection}
      >
        Icon
      </button>
      <div>
        <h2>{title}</h2>
        <h3>{day}</h3>
      </div>
      <button
        disabled={history.location.pathname === "/posts/dayaftertomorrow"}
        onClick={handleForwardDirection}
      >
        Icon
      </button>
    </NavigationStyled>
  );

  function handleBackwardsDirection() {
    switch (history.location.pathname) {
      case "/posts/tomorrow":
        history.push("/posts/today");
        break;
      case "/posts/dayaftertomorrow":
        history.push("/posts/tomorrow");
        break;
      default:
        console.log("Something went wrong");
    }
  }

  function handleForwardDirection() {
    switch (history.location.pathname) {
      case "/posts/today":
        history.push("/posts/tomorrow");
        break;
      case "/posts/tomorrow":
        history.push("/posts/dayaftertomorrow");
        break;
      default:
        console.log("Something went wrong");
    }
  }
}

const NavigationStyled = styled.div`
  display: grid;
  grid-template-columns: var(--size-m) 50px 1fr 50px var(--size-m);
  grid-template-areas: "distleft button1 middle button2 distright";

  div {
    grid-area: middle;
    justify-self: center;
    align-items: center;
    text-align: center;
  }

  button:first-of-type {
    grid-area: button1;
  }

  button:last-of-type {
    grid-area: button2;
  }

  button {
    height: 30px;
    align-self: center;
  }
`;
