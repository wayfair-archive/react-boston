import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Box } from "./layout-components"
import Button from "./button"
import LogoImage from "../images/logo"
import Kebab from "../images/icons/kebab"
import Hamburger from "./hamburger"

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
  <Box
    as="header"
    position="sticky"
    top={0}
    bg="white"
    zIndex="1"
    {...props}
    boxShadow="0 3px 6px rgba(1,46,111, .2)"
  />
)

const Logo = ({ children, ...props }) => (
  <Box
    as="a"
    display="flex"
    alignItems="center"
    width={200}
    px={8}
    py={4}
    aria-label={children}
    {...props}
  >
    <LogoImage width="200px" />
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
            position="relative"
          >
            <Hamburger onClick={toggleMenu} isActive={isOpen} />
          </Box>
          <Box
            as="ul"
            display={[isOpen ? "flex" : "none", null, null, "flex"]}
            flexDirection={["column", null, null, "row"]}
            alignItems={["center", null, null, "baseline"]}
            justifyContent="space-between"
            flexGrow="1"
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
              <Button
                href="https://www.eventbrite.com/e/react-boston-2019-tickets-61701810777"
                openInNewTab
              >
                Buy Tickets
              </Button>
            </Box>
          </Box>
        </Nav>
      </Box>
    </Container>
  )
}

export default Header
