import React from "react"
import { Box, Text, Container } from "./layout-components"
import { css } from "@emotion/core"
import Link from "./link"

const Footer = () => (
  <Box
    as="footer"
    textAlign="center"
    py={10}
    css={theme => css`
      border-top: 2px solid ${theme.colors.primaryLight};
    `}
  >
    <Container>
      <Box
        display="grid"
        gridTemplateColumns={["1fr", "1fr 1fr 1fr"]}
        gridGap="20px"
        alignItems="center"
        maxWidth="1200px"
      >
        <Link href="http://confcodeofconduct.com/" openInNewTab fontSize={3}>
          Code of Conduct
        </Link>
        <Link href="https://twitter.com/ReactBoston" openInNewTab fontSize={3}>
          @ReactBoston on Twitter
        </Link>
        <Link
          href="https://meetup.com/ReactJS-Boston/"
          openInNewTab
          fontSize={3}
        >
          ReactJS Boston Meetup
        </Link>
      </Box>
    </Container>
  </Box>
)

export default Footer
