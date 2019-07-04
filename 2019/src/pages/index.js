import React from "react"
import Layout from "../components/Layout"
import Speakers from "../components/speakers-section"
import "../global-styles/base-reset.css"
import { SectionTitle, Box } from "../components/layout-components"

export default () => (
  <Layout>
    <div>hero / countdown / join us</div>
    <Box maxWidth="1200px" m="auto">
      <SectionTitle lineHeight="2.8" fontSize={6} fontStyle="italic">
        Speakers
      </SectionTitle>
      <Speakers />
    </Box>
  </Layout>
)
