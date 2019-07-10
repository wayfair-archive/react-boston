import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Box, Title } from "./layout-components"
import Button from "./button"
import LogoText from "../images/logo-text"
import FullLogo from "../images/icons/full-logo"
import LogoImage from "../images/logo"
import Kebab from "../images/icons/kebab"

// TODO: Show shadow on stick
// TODO: Responsive
// TODO: Use the right logo
// TODO: Show logo only when stick
// TODO: Use Button component from ./button

const LINKS = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Speakers",
    href: "/speakers",
  },
  {
    title: "Schedule",
    href: "/schedule",
  },
  {
    title: "Venue & Travel",
    href: "/venue",
  },
  {
    title: "Diversity",
    href: "/diversity",
  },
  {
    title: "Sponsors",
    href: "/sponsors",
  },
]

const Container = props => (
  <Box as="header" position="sticky" top={0} bg="white" {...props} />
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
    borderRadius="0 0 0 65px"
    {...props}
  />
)

const NavItem = styled(Box)`
  list-style: none;
`

const NavLinkBase = styled(Link)`
  color: ${p => p.theme.colors.white};
  text-decoration: none;

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

const NavLink = props => (
  <NavLinkBase
    {...props}
    activeStyle={{
      borderBottom: "2px solid",
      fontWeight: "bold",
    }}
  />
)

const BuyButton = styled.a`
  display: block;
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

const MenuButtonBase = styled(Box)`
  display: inline-block;
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: ${p => p.theme.colors.white};

  &:active,
  &:hover,
  &:focus {
    outline-offset: 2px;
    outline: 1px dotted;
  }
`

const MenuButton = props => (
  <MenuButtonBase as="button" aria-label="Menu" {...props}>
    <Kebab />
  </MenuButtonBase>
)

const Header = ({ siteTitle, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(isOpen => !isOpen)
  return (
    <Container {...props}>
      <Box display="flex">
        <Logo href="/">{siteTitle}</Logo>
        <Nav display={[null, null, null, "flex"]} flexGrow="1" fontSize={2}>
          <Box
            display={["flex", null, null, "none"]}
            alignItems="flex-end"
            flexDirection="column"
            mb={4}
          >
            <MenuButton onClick={toggleMenu} />
          </Box>
          <Box
            as="ul"
            display={[isOpen ? "flex" : "none", null, null, "flex"]}
            flexDirection={["column", null, null, "row"]}
            alignItems={["center", null, null, "baseline"]}
          >
            {LINKS.map(({ title, href }) => (
              <NavItem
                as="li"
                key={href}
                p={[3, null, null, 0]}
                mr={[0, null, null, 6]}
              >
                <NavLink to={href}>{title}</NavLink>
              </NavItem>
            ))}
            <Box ml={[0, null, null, 8]} mt={[6, null, null, 0]}>
              <BuyButton href="https://www.eventbrite.com/e/react-boston-2019-tickets-61701810777">
                Buy Tickets
              </BuyButton>
            </Box>
          </Box>
        </Nav>
      </Box>
    </Container>
  )
}

export default Header
