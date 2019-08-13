import React from "react"
import Speakers from "../components/speakers/speakers-section"
import { Box, Container } from "../components/layout-components"
import Dots from "../components/dots"

export default () => (
  <Container title="Speakers">
    <Box
      display={["none", null, null, "grid"]}
      justifyItems="center"
      gridGap="20px"
      gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gridTemplateRows="100px"
      pt="50px"
    >
      <Box gridColumn="2" display={["none", null, null, "block"]}>
        <Dots height="210px" left="60px" />
      </Box>
    </Box>
    <Speakers />
  </Container>
)
