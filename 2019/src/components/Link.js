import React from "react"
import { Box, Text } from "./layout-components"
import styled from "@emotion/styled"

const StyledLink = styled(Text.withComponent("a"))`
  color: #f15959;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const Link = ({ href, openInNewTab, fontSize, children }) => (
  <StyledLink
    href={href}
    target={openInNewTab ? "_blank" : null}
    rel={openInNewTab ? "noopener noreferrer" : null}
    fontSize={fontSize}
  >
    {children}
  </StyledLink>
)

export default Link
