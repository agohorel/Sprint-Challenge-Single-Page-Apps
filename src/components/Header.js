import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </Nav>
    </header>
  );
}

const Nav = styled.nav`
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  padding: 0 25%;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #14de57;

  &:hover {
    color: #14abde;
  }
`;
