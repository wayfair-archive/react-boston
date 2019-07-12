import React from "react"
import Layout from "../components/Layout"
import { Text, Container } from "../components/layout-components"
import Link from "../components/link"

export default () => (
  <Layout>
    <Container title="Diversity">
      <Text mb={4}>
        React Boston believes that diversity is an important part of creating a
        welcoming, inclusive, and innovative tech community.
      </Text>
      <Text mb={4}>
        For React Boston 2019, we've allocated a set of diversity tickets to be
        offered at no cost to members of underrepresented groups in tech. We
        will also prioritize CFP submissions from speakers who indicate they are
        part of an underrepresented group in tech.
      </Text>
      <Text mb={4}>
        We are committed to ensuring that React Boston is accessible for all
        attendees. For questions about accessibility or to request an
        accommodation, please react out to{" "}
        <Link href="mailto:nvlatko@wayfair.com">nvlatko@wayfair.com</Link> prior
        to the conference.
      </Text>
    </Container>
  </Layout>
)
