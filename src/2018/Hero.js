import React from 'react';
import styled from 'styled-components';
import boston from '../images/hero2018.jpg';
import Logo from '../components/Logo';

const HeroWrapper = styled.div`
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  padding: 80px 15px 50px;
  overflow: hidden;
  background: #706a6e;
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.2);
    z-index: 2;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const HeroImage = styled.div`
  background-image: url('${boston}');
  background-size: cover;
  background-position-y: 30%;
  z-index: 1;
  filter: blur(4px);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const HeroLogo = styled.div`
  max-width: 150px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 250px;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 1.1;
  color: ${p => p.theme.color.white};
`;

const HeroSubtitle = styled.h2`
  color: ${p => p.theme.color.white};
  font-size: 1.5rem;
  margin: 1em 0;
`;

const Hero = () => (
  <HeroWrapper id="hero">
    <HeroImage />
    <HeroContent>
      <HeroLogo>
        <Logo />
      </HeroLogo>
      <HeroTitle>React Boston 2018</HeroTitle>
      <HeroSubtitle>
        September 29-30, 2018 | Boston, MA<br />New England's React.js
        conference.
      </HeroSubtitle>
      <HeroSubtitle>Tickets sales and CFP coming soon!</HeroSubtitle>
    </HeroContent>
  </HeroWrapper>
);

export default Hero;
