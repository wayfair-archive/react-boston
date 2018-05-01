import React from 'react';
import styled from 'styled-components';
import { Container, PageBlock } from '../components/Layout';
import { Flex } from 'grid-styled';
import Heading from '../components/Heading';
import Link from '../components/Link';

import wayfair from '../images/wayfair.png';

const P = styled.p`
  text-align: center;
  margin-bottom: 1em;
`;

const Img = styled.img`
  margin: 2em auto;
`;

const Sponsors = () => (
  <PageBlock id="sponsors">
    <Container>
      <Heading title="Sponsors" centered />
      <P>React Boston 2018 is sponsored and hosted by:</P>
      <Flex justify="center">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://tech.wayfair.com/"
        >
          <Img alt="Wayfair" src={wayfair} />
        </a>
      </Flex>
      <P>
        We’re the creative builders solving complex business problems through
        the newest and most innovative software in e-commerce.
      </P>
      <P>
        <Link openInNewWindow href="https://tech.wayfair.com/">
          tech.wayfair.com
        </Link>
      </P>
      <P>
        <Link
          openInNewWindow
          href="https://www.wayfaircareers.com/engineering/"
        >
          wayfaircareers.com/engineering
        </Link>
      </P>
    </Container>
  </PageBlock>
);

export default Sponsors;
