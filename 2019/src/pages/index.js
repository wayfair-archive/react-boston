import React from "react"
import Layout from "../components/Layout"
import Speakers from "../components/speakers-section"
import "../global-styles/base-reset.css"
import { Box, SectionTitle } from "../components/layout-components"
import ImageBanner from "../images/image-banner"
import Button from "../components/button"
import styled from "@emotion/styled"

const StyledSectionTitle = styled(SectionTitle)`
  width: 350px;
`

export default () => (
  <Layout>
    <div>hero / countdown / join us</div>
    <Box maxWidth="1200px" m="auto">
      <Box
        display="grid"
        justifyItems="center"
        gridGap="20px"
        gridTemplateColumns="repeat(auto-fill, minmax(350px, 1fr))"
        gridTemplateRows="100px"
      >
        <StyledSectionTitle lineHeight="2.8" fontSize={6} fontStyle="italic">
          Speakers
        </StyledSectionTitle>
        <ImageBanner />
      </Box>
      <Speakers />
      <Box display="flex" justifyContent="center" mb="11">
        <Button secondary>See All Speakers</Button>
      </Box>
    </Box>
  </Layout>
)
