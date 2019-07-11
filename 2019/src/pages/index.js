import React from "react"
import Layout from "../components/Layout"
import Speakers from "../components/speakers/speakers-section"
import "../global-styles/base-reset.css"
import { Box, SectionTitle, Text } from "../components/layout-components"
import Intro from "../components/intro"
import Dots from "../components/dots"
import styled from "@emotion/styled"

const StyledSectionTitle = styled(SectionTitle)`
  width: 350px;
`

export default () => (
  <Layout>
    <Box maxWidth="1200px" m="auto">
      <Box py={["50px", null, "100px"]} px={["28px", null, null, null, "0"]}>
        <Intro />
      </Box>
      <Box py={["50px", null, "100px"]} px={["28px", null, null, null, "0"]}>
        <Box
          display="grid"
          justifyItems={[null, null, "center"]}
          gridGap="20px"
          gridTemplateColumns="repeat(auto-fill, minmax(350px, 1fr))"
          gridTemplateRows="100px"
        >
          <StyledSectionTitle fontSize={6} fontStyle="italic">
            Speakers
          </StyledSectionTitle>
          <Box display={["none", null, null, "block"]}>
            <Dots height="210px" left="60px" />
          </Box>
        </Box>
        <Speakers />
        <Box display="flex" justifyContent="center" p="11">
          <Text textAlign="center" fontSize={3}>
            More speakers to be announced soon...
          </Text>
        </Box>
      </Box>
    </Box>
  </Layout>
)
