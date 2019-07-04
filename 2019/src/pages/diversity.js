import React from "react"
import Layout from "../components/Layout"
import { Text } from "../components/layout-components"

export default () => (
  <Layout>
    <div>
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
        <a href="https://foundation.travis-ci.org/">Travis Foundation</a> to
        offer free tickets through their{" "}
        <a href="https://diversitytickets.org/">diversitytickets.org</a>{" "}
        program. Applications for these diversity tickets are now closed.
      </Text>
      <Text mb={4}>
        We are committed to ensuring that React Boston is accessible for all
        attendees. For questions about accessibility or to request an
        accommodation, please react out to{" "}
        <a href="mailto:reactboston2019@gmail.com">reactboston2019@gmail.com</a>{" "}
        prior to the conference.
      </Text>
    </div>
  </Layout>
)
