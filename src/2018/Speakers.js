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
  margin-bottom: 2em;
  margin-top: 2em;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  grid-column: -1 / 1;
  position: relative;
  z-index: 2;
  ${({ theme }) =>
    theme.media.md`
      padding: 0 0;
    `};
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
    <HoverCard src={src} isCentered>
      <CardSection>
        <CardTitle>{name}</CardTitle>
        <Company>{company || '\u00A0'}</Company>
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
    <Container>
      <div>Full speaker list will be announced in July!</div>
    </Container>
    <Container>
      <Speakers>
        {speakers.map(speaker => <Speaker key={speaker.name} {...speaker} />)}
      </Speakers>
    </Container>
    <Container>
      <div>
        <strong>
          Our{' '}
          <Link
            openInNewWindow={true}
            href="https://goo.gl/forms/nzy67Gy3g7ItUeaQ2"
          >
            Lightning Talks CFP
          </Link>{' '}
          ⚡ is open until Monday, August 6th, 2018.
        </strong>
      </div>
    </Container>
  </SectionWrap>
);

export default Venue;
