import React from "react"
import Layout from "../components/Layout"
import { Text, Container } from "../components/layout-components"
import Link from "../components/link"
import SEO from "../components/Seo"

export default () => (
  <Layout>
    <SEO />
    <Container title="Conduct">
      <Text mb={4}>
        React Boston is dedicated to providing a harassment-free conference
        experience for everyone, regardless of gender, gender identity and
        expression, age, sexual orientation, disability, physical appearance,
        body size, race, ethnicity, religion (or lack thereof), or technology
        choices. We do not tolerate harassment of conference participants in any
        form. Sexual language and imagery is not appropriate for any conference
        venue, including talks, workshops, parties, Twitter and other online
        media. Conference participants violating these rules may be sanctioned
        or expelled from the conference without a refund at the discretion of
        the conference organizers.
      </Text>
      <Text mb={4}>
        Participants will be provided with contact information to reach
        conference staff who will be happy help participants contact hotel/venue
        security or local law enforcement, provide escorts, or otherwise assist
        those experiencing harassment to feel safe for the duration of the
        conference.
      </Text>
      <Text mb={4}>
        Organizers will enforce this code throughout the event, and can be
        reached at{" "}
        <Link href="mailto:reactboston2019@gmail.com">
          reactboston2019@gmail.com
        </Link>
        , or through the conference Slack channel provided to participants.
      </Text>{" "}
      <Text mb={4}>
        Full Version:{" "}
        <Link href="http://confcodeofconduct.com/" openInNewTab>
          Code of Conduct
        </Link>
      </Text>
    </Container>
  </Layout>
)
