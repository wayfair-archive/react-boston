import React from 'react';
import styled from 'styled-components';
import Section, { Container } from './components/Layout';

const P = styled.p`
  margin-bottom: 1em;
`;

const Diverity = ({ id }) => (
  <Section title="Diversity" id={id}>
    <Container>
      <P>
        React Boston believes that diversity is an important part of creating a
        welcoming, inclusive, and innovative tech community. For React Boston
        2018, we've allocated a set of diversity tickets to be offered at no
        cost to members of underrepresented groups in tech.
      </P>
    </Container>
  </Section>
);

export default Diverity;
