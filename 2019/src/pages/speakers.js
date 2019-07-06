import React from "react"
import Layout from "../components/Layout"
import Speakers from "../components/speakers-section"
import { Box } from "../components/layout-components"

export default () => (
  <Layout>
    <Box maxWidth="1200px" m="164px auto 0">
      <Speakers />
    </Box>
  </Layout>
)
