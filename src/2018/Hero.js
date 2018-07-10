import React from 'react';
import styled from 'styled-components';
import background from './images/hero-bg.jpg';
import Logo from './components/Logo';
import Button from './components/Button';
import Link from './components/Link';
import Arrow from 'react-icons/lib/md/arrow-forward';
import { Card } from './components/Card';

const HeroWrapper = styled.div`
  background-image: url('${background}');
  background-color: rgba(5, 54, 113, .9);
  background-blend-mode: multiply;
  background-size: cover;
  min-height: 640px;
  text-align: center;
  position: relative;
  padding: 80px 15px 150px;
`;

const HeroSubtitle = styled.h2`
  color: ${({ theme }) => theme.color.white};
  font-size: 2.4rem;
  margin: 1em 0;
  text-transform: uppercase;
`;

const HeroCTAWrap = styled.div`
  width: 565px;
  max-width: 100%;
  margin: 0 auto;
`;

const HeroCTA = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  grid-gap: 15px;
  text-align: center;
  align-items: stretch;
  margin-bottom: 15px;
`;

const Dates = styled.p`
  background: ${({ theme }) => theme.color.white};
  padding: 1em;
  font-size: 2.4rem;
`;

const HeroTitle = styled.h1`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
  transform: translateZ(0);
`;

const HeroIntro = styled.div`
  position: relative;
  margin: -100px auto 150px;
  width: ${({ theme }) => theme.containerWidth};
  max-width: 90%;
  z-index: 3;
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 80%;
    width: 100%;
    background: radial-gradient(red 15%, transparent 16%) 1px 1px,
      radial-gradient(rgba(255, 255, 255, 0) 15%, transparent 20%) 8px 9px;
    background-size: 16px 16px;
    z-index: -1;
  }
  &::before {
    content: '';
    top: 40%;
    right: 30%;
  }

  &::after {
    content: '';
    top: -18%;
    left: 30%;
  }
`;

const LogoWrap = styled.div`
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
`;

const IntroText = styled.p`
  padding: 4rem;
`;

const Hero = () => (
  <React.Fragment>
    <HeroWrapper id="hero">
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <HeroTitle>React Boston</HeroTitle>
      <HeroSubtitle>New England's Annual React.js conference</HeroSubtitle>
      <HeroCTAWrap>
        <HeroCTA>
          <Dates>September 29-30, 2018</Dates>
          <Button
            openInNewWindow
            href="https://www.eventbrite.com/e/react-boston-2018-tickets-46422273269"
          >
            Buy Tickets{' '}
            <span style={{ marginLeft: 10 }}>
              <Arrow />
            </span>
          </Button>
        </HeroCTA>
      </HeroCTAWrap>
      <HeroSubtitle>
        <Link
          style={{ color: 'white' }}
          openInNewWindow
          href="https://www.eventbrite.com/e/react-boston-2018-tickets-46422273269"
        >
          Tickets are now on sale!
        </Link>
      </HeroSubtitle>
    </HeroWrapper>
    <HeroIntro>
      <Card>
        <IntroText>
          React Boston is a two-day, single-track conference on React hosted in
          Boston's Back Bay neighborhood and organized in collaboration with{' '}
          <Link openInNewWindow href="https://tech.wayfair.com/">
            Wayfair Tech
          </Link>{' '}
          and the community{' '}
          <Link openInNewWindow href="https://meetup.com/ReactJS-Boston/">
            ReactJS Boston Meetup
          </Link>. We're excited to welcome developers of all backgrounds, skill
          sets, and experience levels to join us for a weekend of high-quality
          content and great conversations with others in the developer
          community.
        </IntroText>
      </Card>
    </HeroIntro>
  </React.Fragment>
);

export default Hero;
