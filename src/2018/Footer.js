import React from 'react';
import background from './images/hero-bg.jpg';
import { Container } from './components/Layout';
import styled from 'styled-components';

const P = styled.p`
  margin-bottom: 1em;
  color: ${({ theme }) => theme.color.white};
`;

const FooterWrap = styled.footer`
  background-image: url('${background}');
  background-color: #053671;
  background-blend-mode: multiply;
  background-size: cover;
  background-position-y: 30%;
  text-align: center;
  padding: 40px 10px 40px;
`;

const FooterLink = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.color.white};
  transition: color 0.15s ease-out;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const FooterLinks = styled.div`
  max-width: 600px;
  margin: 2em auto 0;
  display: flex;
  justify-content: space-between;
`;

const FooterCTA = styled.div`
  display: flex;
  background: ${({ theme }) => theme.color.white};
  text-align: center;
  align-items: center;
  width: 500px;
  max-width: 100%;
  margin: 0 auto 2em;
`;

const Dates = styled.p`
  flex: 1 0 auto;
  padding: 1em;
`;

const Footer = props => (
  <FooterWrap>
    <Container>
      <FooterCTA>
        <Dates>September 23-24, 2018</Dates>
      </FooterCTA>
      <P>
        For more tourist attractions and restaraunt<br /> recommendations, visit
        TripAdvisor’s{' '}
        <FooterLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.tripadvisor.com/Travel_Guide-g60745-Boston_Massachusetts.html"
        >
          Boston Travel Guide
        </FooterLink>.
      </P>
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
