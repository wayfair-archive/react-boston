import React from "react"
import Layout from "../components/Layout"
import Speakers from "../components/speakers/speakers-section"
import { Box } from "../components/layout-components"
import Dots from "../components/dots"
import styled from "@emotion/styled"

const VisuallyHiddenTitle = styled.h1`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
`
export default () => (
  <Layout>
    <Box maxWidth={["94vw", "90vw", "", "1200px"]} m="64px auto">
      <Box
        display="grid"
        justifyItems="center"
        gridGap="20px"
        gridTemplateColumns="repeat(auto-fill, minmax(350px, 1fr))"
        gridTemplateRows="100px"
        pt="50px"
      >
        <VisuallyHiddenTitle>Speakers</VisuallyHiddenTitle>
        <Box gridColumn="2">
          <Dots height="210px" left="60px" />
        </Box>
      </Box>
      <Speakers />
    </Box>
  </Layout>
)
