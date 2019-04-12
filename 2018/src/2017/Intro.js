import React from 'react';
import styled from 'styled-components';
import { Container, PageBlock } from './components/Layout';
import Heading from './components/Heading';
import Link from './components/Link';

const P = styled.p`
  margin-bottom: 1em;
`;

const Intro = () => (
  <PageBlock>
    <Container>
      <Heading title="Two-Day Conference on React" centered />
      <P>
        React Boston is a two-day, single-track conference on React hosted in
        Boston's Back Bay neighborhood and organized in collaboration with{' '}
        <Link openInNewWindow href="http://engineering.wayfair.com/">
          Wayfair Engineering
        </Link>{' '}
        and the{' '}
        <Link openInNewWindow href="https://meetup.com/ReactJS-Boston/">
          ReactJS Boston Meetup
        </Link>. We're excited to welcome developers of all backgrounds, skill
        sets, experience levels to join us for a weekend of high-quality content
        and great conversations with others in the developer community.
      </P>
    </Container>
  </PageBlock>
);

export default Intro;
