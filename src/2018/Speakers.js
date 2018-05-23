import React from 'react';
import { CardSection, CardTitle } from './components/Card';
import Link from './components/Link';
import { Container, SectionTitle, SectionWrap } from './components/Layout';
import HoverCard from './components/HoverCard';
import styled from 'styled-components';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';

import { speakers } from './api/speakers';

const Speakers = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 15px;
  margin-bottom: 1em;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-column: 1 / -1;
  padding: 0 30px;
  position: relative;
  z-index: 2;
  &:nth-of-type(odd) {
    margin-left: 50px;
  }
`;

const SocialLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.color.primary};
  transition: 0.25s ease-out;
  font-size: 1.75em;
  & + & {
    margin-left: 10px;
  }
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.primaryAccent};
    text-decoration: none;
  }
`;

const Company = styled.p`
  margin-top: 5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.light};
`;

const Speaker = ({ url, name, src, company, twitter, github }) => (
  <li>
    <HoverCard
      src={src}
      href={url}
      isCentered
      target="_blank"
      rel="noopener noreferrer"
    >
      <CardSection>
        <CardTitle>{name}</CardTitle>
        <Company>{company}</Company>
        {twitter && (
          <SocialLink href={twitter}>
            <TwitterIcon />
          </SocialLink>
        )}
        {github && (
          <SocialLink href={github}>
            <GithubIcon />
          </SocialLink>
        )}
      </CardSection>
    </HoverCard>
  </li>
);

const Venue = ({ id }) => (
  <SectionWrap id={id}>
    <Container>
      <SectionTitle>Speakers</SectionTitle>
    </Container>
    {speakers.length > 1 ? (
      <Speakers>
        {speakers.map(speaker => <Speaker key={speaker.name} {...speaker} />)}
      </Speakers>
    ) : (
      <Container>
        <div>
          Our{' '}
          <Link
            openInNewWindow={true}
            href="https://goo.gl/forms/tJJBwTCur7KkqjPq2"
          >
            call for speakers
          </Link>{' '}
          is open until Saturday, June 30th, 2018.
        </div>
      </Container>
    )}
  </SectionWrap>
);

export default Venue;
