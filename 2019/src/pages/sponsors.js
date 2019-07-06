import React from "react"
import Layout from "../components/Layout"
import { Text, Box } from "../components/layout-components"
import Link from "../components/link"

export default () => (
  <Layout>
    <Box maxWidth={["94vw", "90vw", "", "1200px"]} my={11} mx="auto">
      <Text mb={4} fontSize={3}>
        React Boston 2019 is sponsored and hosted by:
      </Text>
      <Text mb={4} fontSize={3}>
        Wayfair
      </Text>
      <Text mb={4} fontSize={3}>
        We're the creative builders solving complex business problems through
        the newest and most innovative software in e-commerce.
      </Text>
      <Text mb={4} fontSize={3}>
        <Link href="https://tech.wayfair.com/" openInNewTab>
          tech.wayfair.com
        </Link>
      </Text>
      <Text fontSize={3}>
        <Link
          href="https://www.wayfair.com/careers/jobs/?teamIds=1"
          openInNewTab
        >
          wayfair.com/careers
        </Link>
      </Text>
    </Box>
  </Layout>
)
