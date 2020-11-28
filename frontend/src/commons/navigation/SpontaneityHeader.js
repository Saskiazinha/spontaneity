import React, { useRef, useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export default function SpontaneityHeader() {
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
        <NavLink to="/posts/today">Posts</NavLink>
        <NavLink to="/myposts/today">My Posts</NavLink>
      </Menu>
    </div>
  );

  function handleClick() {
    setIsActive(!isActive);
  }
}

const Menu = styled.button`
  background: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 60px;
  right: 0;
  width: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}
`;

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
