import React from "react"
import Layout from "../components/Layout"
import Speakers from "../components/speakers/speakers-section"
import { Box } from "../components/layout-components"

export default () => (
  <Layout>
    <Box maxWidth={["94vw", "90vw", "", "1200px"]} m="164px auto 64px">
      <Speakers />
    </Box>
  </Layout>
)
