import React from "react"
import { Box, Text } from "./layout-components"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Link = styled(Text.withComponent("a"))`
  font-size: 1.25rem;
  color: #f15959;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const Footer = () => (
  <Box
    as="footer"
    textAlign="center"
    py={10}
    css={theme => css`
      border-top: 2px solid ${theme.colors.primaryLight};
    `}
  >
    <Text fontSize={6} mb={10} fontWeight="bold">
      See you in September!
    </Text>
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr"
      gridGap="4px"
      alignItems="center"
    >
      <Link href="http://confcodeofconduct.com/">Code of Conduct</Link>
      <Link href="https://twitter.com/ReactBoston">
        @ReactBoston on Twitter
      </Link>
      <Link href="https://meetup.com/ReactJS-Boston/">
        ReactJS Boston Meetup
      </Link>
    </Box>
  </Box>
)

export default Footer
