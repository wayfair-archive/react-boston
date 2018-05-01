import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Container, PageBlock } from '../components/Layout';
import Heading from '../components/Heading';

const P = styled.p`
  margin-bottom: 1em;
`;

const Diverity = () => (
  <PageBlock id="diversity">
    <Container>
      <Heading title="Diversity" centered />
      <Flex wrap>
        <Box width={[1]} pr={20}>
          <P>
            React Boston believes that diversity is an important part of
            creating a welcoming, inclusive, and innovative tech community. For
            React Boston 2018, we've allocated a set of diversity tickets to be
            offered at no cost to members of underrepresented groups in tech.
          </P>
        </Box>
      </Flex>
    </Container>
  </PageBlock>
);

export default Diverity;
