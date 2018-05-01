import React from 'react';
import styled from 'styled-components';
import { Container, PageBlock } from '../components/Layout';
import Heading from '../components/Heading';
import Link from '../components/Link';
import d from '../images/2017_1.jpg';
import f from '../images/2017_2.jpg';
import e from '../images/2017_3.jpg';
import c from '../images/2017_4.jpg';
import a from '../images/2017_8.jpg';
import b from '../images/2017_6.jpg';

const P = styled.p`
  margin-bottom: 1em;
`;

const PhotoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
    grid-gap: 20px;
  }
`;

const Intro = () => (
  <PageBlock>
    <Container>
      <Heading title="Two-Day Conference on React.js" centered />
      <P>
        React Boston is a two-day, single-track conference on React hosted in
        Boston's Back Bay neighborhood and organized in collaboration with{' '}
        <Link openInNewWindow href="https://tech.wayfair.com/">
          Wayfair Tech
        </Link>{' '}
        and the community{' '}
        <Link openInNewWindow href="https://meetup.com/ReactJS-Boston/">
          ReactJS Boston Meetup
        </Link>. We're excited to welcome developers of all backgrounds, skill
        sets, experience levels to join us for a weekend of high-quality content
        and great conversations with others in the developer community.
      </P>
      <P>
        React Boston is back in 2018 for the second year in a row, following the
        inaugural React Boston in September 2017 with hundreds of attendees and
        over 25 speakers from around the world.
      </P>
    </Container>
    <Container>
      <PhotoGrid>
        <img src={a} alt="" />
        <img src={b} alt="" />
        <img src={c} alt="" />
        <img src={d} alt="" />
        <img src={e} alt="" />
        <img src={f} alt="" />
      </PhotoGrid>
    </Container>
  </PageBlock>
);

export default Intro;
