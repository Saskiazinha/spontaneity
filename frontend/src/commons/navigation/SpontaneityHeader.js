import React, { useRef, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function SpontaneityHeader() {
  const history = useHistory();
  const { logout } = useContext(UserContext);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const pageClickEvent = (event) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsActive(!isActive);
      }
    };
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  return (
    <div>
      <HeaderStyled>
        <MenuButton onClick={handleClick}>
          <GiHamburgerMenu size={30} />
        </MenuButton>
        <h1>Spontaneity</h1>
      </HeaderStyled>
      <Menu ref={dropdownRef} active={isActive}>
        <NavLink to="/posts/today">Friend's posts</NavLink>
        <NavLink to="/myposts/today">My posts</NavLink>
        <NavLink to="/friends">Friends</NavLink>
        <NavLink to="/myposts/today">Info</NavLink>
        <ButtonStyling onClick={handleLogout}>Logout</ButtonStyling>
      </Menu>
    </div>
  );

  function handleClick() {
    setIsActive(!isActive);
  }

  function handleLogout() {
    logout();
    history.push("/login");
  }
}

const HeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  justify-items: center;
  align-items: center;
  background-color: var(--turquoise-main);

  h1 {
    margin: 0;
  }
`;

const MenuButton = styled.button`
  color: var(--white-main);
  background-color: transparent;
  border: none;
`;

const Menu = styled.nav`
  display: grid;
  align-items: center;
  grid-template-rows: repeat(5, 50px);
  padding: var(--size-m) 0 0 var(--size-xl);
  background: var(--turquoise-main);
  width: 140px;
  height: 83vh;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

  a {
    text-decoration: none;
    letter-spacing: 0.4px;
    font-size: 1.05em;
    color: var(--white-main);
    padding: var(--size-xs);
  }

  ${(props) =>
    props.active &&
    css`
      opacity: 0.95;
      visibility: visible;
      transform: translateX(0);
      position: absolute;
      z-index: 15;
    `}
`;

const ButtonStyling = styled.button`
  justify-self: start;
  font-size: 1.02em;
`;
