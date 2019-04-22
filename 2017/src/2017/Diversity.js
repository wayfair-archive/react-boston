import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Container, PageBlock } from './components/Layout';
import Heading from './components/Heading';
import Link from './components/Link';

import sgo from '../images/sgo.png';
import latinosintech from '../images/latin@s_in_tech.jpg';

const P = styled.p`
  margin-bottom: 1em;
`;

const LogoSGO = styled.img`
  width: 65%;
  margin: 0 auto 1em auto;
`;

const LogoLIT = styled.img`
  width: 65%;
  margin: 0 auto;
`;

const Diverity = () => (
  <PageBlock id="diversity">
    <Container>
      <Heading title="Diversity" centered />
      <Flex wrap>
        <Box width={[1, 1 / 2, 3 / 5]} pr={20}>
          <P>
            React Boston believes that diversity is an important part of
            creating a welcoming, inclusive, and innovative tech community. For
            React Boston 2017, we've allocated a set of diversity tickets to be
            offered at no cost to members of underrepresented groups in tech.
          </P>
          <P>
            We're excited to be working with the{' '}
            <Link openInNewWindow href="http://foundation.travis-ci.org/">
              Travis Foundation
            </Link>{' '}
            to offer several of these through their diversitytickets.org
            program. Applications for diversity tickets are now closed.
          </P>
          <P>
            Additional diversity tickets are also being distributed through our
            partnerships with local organizations and events, including:{' '}
            <Link openInNewWindow href="https://www.shegeeksout.com/">
              She Geeks Out
            </Link>,{' '}
            <Link
              openInNewWindow
              href="https://www.meetup.com/Latinos-in-Tech-Boston/"
            >
              Latin@s in Tech Boston
            </Link>, and Women in Tech.
          </P>
        </Box>
        <Flex
          width={[1, 1 / 2, 2 / 5]}
          pl={20}
          flexDirection="column"
          justify="space-around"
        >
          <Link openInNewWindow href="https://www.shegeeksout.com/">
            <LogoSGO src={sgo} />
          </Link>
          <Link
            openInNewWindow
            href="https://www.meetup.com/Latinos-in-Tech-Boston/"
          >
            <LogoLIT src={latinosintech} />
          </Link>
        </Flex>
      </Flex>
    </Container>
  </PageBlock>
);

export default Diverity;
