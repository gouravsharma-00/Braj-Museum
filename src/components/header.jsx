// src/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #3f7040;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
        <h1>Braj Museum</h1>
      <Nav>
        <NavLink href="#contact-us">Contact Us</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#info-list">Info List</NavLink>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;