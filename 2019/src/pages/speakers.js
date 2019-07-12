import React from "react"
import Layout from "../components/Layout"
import Speakers from "../components/speakers/speakers-section"
import { Box, Container, Text } from "../components/layout-components"
import Dots from "../components/dots"

export default () => (
  <Layout>
    <Container title="Speakers">
      <Box
        display={["none", null, null, "grid"]}
        justifyItems="center"
        gridGap="20px"
        gridTemplateColumns="repeat(auto-fill, minmax(325px, 1fr))"
        gridTemplateRows="100px"
        pt="50px"
      >
        <Box gridColumn="2" display={["none", null, null, "block"]}>
          <Dots height="210px" left="60px" />
        </Box>
      </Box>
      <Speakers />
      <Box display="flex" justifyContent="center" p="11">
        <Text textAlign="center" fontSize={3}>
          More speakers to be announced soon...
        </Text>
      </Box>
    </Container>
  </Layout>
)
