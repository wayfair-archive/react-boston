import React from "react"
import Layout from "../components/Layout"
import { Text, Container } from "../components/layout-components"
import Link from "../components/link"
import SEO from "../components/Seo"

export default () => (
  <Layout>
    <SEO />
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
        This year we partnered with the{" "}
        <Link href="https://foundation.travis-ci.org/" openInNewTab>
          Travis Foundation
        </Link>{" "}
        to offer free tickets through their{" "}
        <Link href="https://diversitytickets.org/" openInNewTab>
          diversitytickets.org
        </Link>{" "}
        program. Applications for these diversity tickets are now closed.
      </Text>
      <Text mb={4}>
        We are committed to ensuring that React Boston is accessible for all
        attendees. For questions about accessibility or to request an
        accommodation, please react out to{" "}
        <Link href="mailto:reactboston2019@gmail.com">
          reactboston2019@gmail.com
        </Link>{" "}
        prior to the conference.
      </Text>
    </Container>
  </Layout>
)
