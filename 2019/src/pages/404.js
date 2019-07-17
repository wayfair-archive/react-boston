import React from "react"
import IconLogo from "../images/icons/logo"
import { Box, Container } from "../components/layout-components"

const NotFoundPage = () => (
  <Container>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist...</p>
    <Box width="400px" mx="auto" my="11">
      <IconLogo />
    </Box>
  </Container>
)

export default NotFoundPage
