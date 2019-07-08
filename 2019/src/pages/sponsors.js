import React from "react"
import Layout from "../components/Layout"
import { Text, Container } from "../components/layout-components"
import Link from "../components/link"

export default () => (
  <Layout>
    <Container>
      <Text mb={4}>React Boston 2019 is sponsored and hosted by:</Text>
      <Text mb={4}>Wayfair</Text>
      <Text mb={4}>
        We're the creative builders solving complex business problems through
        the newest and most innovative software in e-commerce.
      </Text>
      <Text mb={4}>
        <Link href="https://tech.wayfair.com/" openInNewTab>
          tech.wayfair.com
        </Link>
      </Text>
      <Text>
        <Link
          href="https://www.wayfair.com/careers/jobs/?teamIds=1"
          openInNewTab
        >
          wayfair.com/careers
        </Link>
      </Text>
    </Container>
  </Layout>
)
