import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoText from "../images/logo-text"
import { Box, Title } from "./layout-components"
import styled from "@emotion/styled"

const StyledHeader = Box.withComponent("header")

const StyledLink = styled(Link)`
  display: block;
  width: 200px;
  text-decoration: none;
  background-image: linear-gradient(transparent 92%, #2160ad 0);
`

const Header = () => (
  <StyledHeader marginBottom="4">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Title
        position="absolute"
        top="auto"
        left="-10000px"
        width="1px"
        height="1px"
        overflow="hidden"
        textStyle={{
          transform: "translateZ(0)",
        }}
      >
        React Boston
      </Title>
      <StyledLink to="/">
        <LogoText />
      </StyledLink>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
