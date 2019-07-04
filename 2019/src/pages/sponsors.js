import React from "react"
import Layout from "../components/Layout"
import { Text, Box } from "../components/layout-components"
import Link from "../components/link"

export default () => (
  <Layout>
    <div>
      <Text mb={4}>React Boston 2019 is sponsored and hosted by:</Text>
      <Text mb={4}>Wayfair</Text>
      <Text mb={4}>
        We're the creative builders solving complex business problems through
        the newest and most innovative software in e-commerce.
      </Text>
      <Box mb={4}>
        <Link href="https://tech.wayfair.com/" openInNewTab>
          tech.wayfair.com
        </Link>
      </Box>
      <Link href="https://www.wayfair.com/careers/jobs/?teamIds=1" openInNewTab>
        wayfair.com/careers
      </Link>
    </div>
  </Layout>
)
