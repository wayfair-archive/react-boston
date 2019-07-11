import React from "react"
import { Text } from "./layout-components"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

export const linkStyles = css`
  color: #d63333;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`

const Link = ({ href, openInNewTab, fontSize, children }) => (
  <Text
    as="a"
    href={href}
    target={openInNewTab ? "_blank" : null}
    rel={openInNewTab ? "noopener noreferrer" : null}
    fontSize={fontSize}
    css={css`
      ${linkStyles}
    `}
  >
    {children}
  </Text>
)

export default Link
