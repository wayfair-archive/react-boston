import React from "react"
import { Box, Text } from "./layout-components"
import styled from "@emotion/styled"

const StyledFooter = Box.withComponent("footer")

const Link = styled(Text.withComponent("a"))`
  color: #2160ad;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const Footer = () => (
  <StyledFooter
    display="grid"
    gridTemplateColumns="1fr 1fr 1fr"
    gridGap="4px"
    textAlign="center"
    alignItems="center"
  >
    <Link href="http://confcodeofconduct.com/">Code of Conduct</Link>
    <Link href="https://twitter.com/ReactBoston">ReactBoston on Twitter</Link>
    <Link href="https://meetup.com/ReactJS-Boston/">ReactJS Boston Meetup</Link>
  </StyledFooter>
)

export default Footer
