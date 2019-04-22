import React from 'react';
import { Container } from './Layout';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  background: black;
  @media (min-width: 768px) {
    padding: 2rem 0;
  }
`;

const FooterLink = styled.a`
  border: 0;
  text-align: center;
  color: white;
  transition: color 0.15s ease-out;
  padding: 1em 0;
  display: block;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  @media (min-width: 768px) {
    border: 0;
  }
  &:hover,
  &:focus {
    color: #ccc;
  }
`;

const FooterLinks = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Footer = props => (
  <FooterWrap>
    <Container>
      <FooterLinks>
        <FooterLink
          target="_blank"
          rel="noopener noreferrer"
          href="http://confcodeofconduct.com/"
        >
          Code of Conduct
        </FooterLink>
        <FooterLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/ReactBoston"
        >
          @ReactBoston on Twitter
        </FooterLink>
        <FooterLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://meetup.com/ReactJS-Boston/"
        >
          ReactJS Boston Meetup
        </FooterLink>
      </FooterLinks>
    </Container>
  </FooterWrap>
);

export default Footer;
