import React from 'react';
import Link from './components/Link';
import Section, { Container } from './components/Layout';
import styled from 'styled-components';

const P = styled.p`
  margin-bottom: 1em;
`;

const Conduct = ({ id }) => (
  <Section title="Code of Conduct" id={id}>
    <Container>
      <P>
        React Boston is dedicated to providing a harassment-free conference
        experience for everyone, regardless of gender, gender identity and
        expression, age, sexual orientation, disability, physical appearance,
        body size, race, ethnicity, religion (or lack thereof), or technology
        choices. We do not tolerate harassment of conference participants in any
        form. Sexual language and imagery is not appropriate for any conference
        venue, including talks, workshops, parties, Twitter and other online
        media. Conference participants violating these rules may be sanctioned
        or expelled from the conference without a refund at the discretion of
        the conference organisers.
      </P>
      <P>
        Participants will be provided with contact information to reach
        conference staff who will be happy help participants contact hotel/venue
        security or local law enforcement, provide escorts, or otherwise assist
        those experiencing harassment to feel safe for the duration of the
        conference.
      </P>
      <P>
        Organizers will enforce this code throughout the event, and can be
        reached at{' '}
        <Link href="mailto:reactboston2018@gmail.com">
          reactboston2018@gmail.com
        </Link>, or through the conference Slack channel provided to
        participants.
      </P>
      <P>
        <strong>Full Version: </strong>
        <Link openInNewWindow href="http://confcodeofconduct.com/">
          Code of Conduct
        </Link>
      </P>
    </Container>
  </Section>
);

export default Conduct;
