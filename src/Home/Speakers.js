import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, PageBlock } from '../components/Layout';
import Heading from '../components/Heading';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import GithubIcon from 'react-icons/lib/fa/github';

const SpeakerWrap = styled.article`
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const SpeakerPhoto = styled.img`
  display: block;
  width: calc(100% + 20px);
  margin: -10px -10px 10px;
  max-width: none;
`;

const SpeakerName = styled.h3`
  font-size: 1.5rem;
`;

const SpeakerCompany = styled.p`
  color: ${({ theme }) => theme.color.dark};
`;

const Social = styled.div`
  font-size: 1.75rem;
  margin-top: auto;
`;

const SocialLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.color.primary};
  transition: 0.25s ease-out;
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.1));
  & + & {
    margin-left: 10px;
  }
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.primaryAccent};
    transform: translateY(-2px);
    filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
    text-decoration: none;
  }
`;

const Speaker = ({ imageSrc, name, company, description, twitter, github }) => (
  <SpeakerWrap>
    <SpeakerPhoto src={imageSrc} alt={`Photo of ${name}.`} />
    <SpeakerName>{name}</SpeakerName>
    <SpeakerCompany>{company}</SpeakerCompany>
    <p className="Speaker-description">{description}</p>
    <Social>
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
    </Social>
  </SpeakerWrap>
);

Speaker.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  company: PropTypes.string,
  description: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string
};

const SpeakerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
  }
`;

const Speakers = ({ speakerList, id }) => (
  <PageBlock id={id}>
    <Container>
      <Heading title="Speakers" centered />
      <SpeakerGrid>
        {speakerList
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map(speaker => <Speaker key={speaker.name} {...speaker} />)}
      </SpeakerGrid>
    </Container>
  </PageBlock>
);

export default Speakers;
