// src/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #ffc107;
  padding: 20px;
  text-align: center;
`;

const InitiativeText = styled.p`
  margin: 0;
`;

const Logo = styled.img`
  height: 50px;
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <InitiativeText>An Initiative by GLA University</InitiativeText>
      <Logo src="/logo.png" alt="Braj Museum Logo" />
    </FooterWrapper>
  );
};

export default Footer;