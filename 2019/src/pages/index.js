import React from "react"
import Layout from "../components/Layout"
import Speakers from "../components/speakers/speakers-section"
import "../global-styles/base-reset.css"
import { Box, SectionTitle, Text } from "../components/layout-components"
import ImageBanner from "../images/image-banner"
import Button from "../components/button"
import Intro from "../components/intro"
import Dots from "../components/dots"
import styled from "@emotion/styled"

const StyledSectionTitle = styled(SectionTitle)`
  width: 350px;
`

export default () => (
  <Layout>
    <Box maxWidth="1200px" m="auto">
      <Box mt="100px" mb="120px">
        <Intro />
      </Box>
      <section>
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
          <Dots height="210px" left="60px" />
        </Box>
        <Speakers />
        <Box display="flex" justifyContent="center" p="11">
          <Text textAlign="center" fontSize={3}>
            More speakers to be announced soon
          </Text>
        </Box>
      </section>
    </Box>
  </Layout>
)
