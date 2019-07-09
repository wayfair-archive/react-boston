import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoText from "../images/logo-text"
import { Box, Title } from "./layout-components"
import styled from "@emotion/styled"
import headerCornerImage from "../images/header-corner"

// TODO: Show shadow on stick
// TODO: Responsive
// TODO: Use the right logo
// TODO: Show logo only when stick

const LINKS = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Speakers",
    href: "#speakers",
  },
  {
    title: "Schedule",
    href: "#schedule",
  },
  {
    title: "Venue & Travel",
    href: "#venue",
  },
  {
    title: "Diversity",
    href: "#diversity",
  },
  {
    title: "Sponsors",
    href: "#sponsors",
  },
]

const Container = props => (
  <Box as="header" position="sticky" top="0" bg="white" {...props} />
)

const Logo = ({ children, ...props }) => (
  <Box
    as="a"
    display="block"
    width={195}
    px={8}
    py={4}
    aria-label={children}
    {...props}
  >
    <LogoText />
  </Box>
)

const Nav = props => (
  <Box
    as="nav"
    py={10}
    px={11}
    color="white"
    bg="primaryDark"
    backgroundImage={headerCornerImage}
    backgroundPosition="left bottom"
    backgroundRepeat="no-repeat"
    {...props}
  />
)

const NavItem = styled(Box)`
  list-style: none;
`

const NavLink = styled.a`
  color: ${p => p.theme.colors.white};
  text-decoration: none;
  border-bottom: ${p => (p.active ? "2px solid" : null)};
  font-weight: ${p => (p.active ? "bold" : null)};

  &:hover,
  &:focus,
  &:active {
    border-bottom: 2px solid;
  }

  &:focus {
    outline-offset: 2px;
    outline: 1px dotted;
  }
`

const BuyButton = styled.a`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[9]}px;
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-style: italic;
  font-weight: bold;
  text-decoration: none;
  border-radius: 2em;

  &:hover,
  &:focus,
  &:active {
    background-color: ${p => p.theme.colors.secondaryDark};
  }

  &:focus {
    outline: 0;
  }
`

const Header = ({ siteTitle, activeHref, ...props }) => (
  <Container {...props}>
    <Box display="flex">
      <Logo href="/">{siteTitle}</Logo>
      <Nav display="flex" alignItems="baseline" flexGrow="1" fontSize={2}>
        <Box as="ul" display="flex">
          {LINKS.map(({ title, href }) => (
            <NavItem as="li" key={href} mr={6}>
              <NavLink href={href} active={href === activeHref}>
                {title}
              </NavLink>
            </NavItem>
          ))}
        </Box>
        <Box ml={8}>
          <BuyButton href="/foo">Buy Tickets</BuyButton>
        </Box>
      </Nav>
    </Box>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  activeHref: PropTypes.string,
}

Header.defaultProps = {
  activeHref: "#about",
}

export default Header
