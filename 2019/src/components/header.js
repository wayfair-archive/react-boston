import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { Box } from "./layout-components"
import Button from "./button"
import LogoImage from "../images/logo"
import Hamburger from "./hamburger"

const LINKS = [
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
  {
    title: "About",
    href: "/about",
  },
]

const Container = props => (
  <Box as="header" top="0" bg="white" zIndex="1" {...props} />
)

const Logo = ({ children, ...props }) => (
  <Box
    as={Link}
    display="flex"
    alignItems="center"
    width={["200px", "250px"]}
    px={8}
    py={4}
    aria-label={children}
    {...props}
  >
    <LogoImage width="100%" />
  </Box>
)

const Nav = props => (
  <Box as="nav" py={10} px={11} color="white" bg="primaryDark" {...props} />
)

const NavItem = styled(Box)`
  list-style: none;
`

const NavLinkBase = styled(Link)`
  color: ${p => p.theme.colors.white};
  text-decoration: none;
  transition: 0.3s ease;
  border-bottom: 2px solid transparent;

  &:hover,
  &:focus,
  &:active {
    border-bottom-color: ${({ theme }) => theme.colors.white};
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
      borderBottomColor: "#fff",
    }}
  />
)

const Header = ({ siteTitle, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(isOpen => !isOpen)
  return (
    <Container {...props}>
      <Box display="flex">
        <Logo to="/">{siteTitle}</Logo>
        <Nav
          display={[null, null, null, "flex"]}
          flexGrow="1"
          fontSize={2}
          position="relative"
          borderRadius={isOpen ? null : "0 0 0 65px"}
        >
          <Hamburger onClick={toggleMenu} isActive={isOpen} />
          <Box
            as="ul"
            display={[isOpen ? "flex" : "none", null, null, "flex"]}
            flexDirection={["column", null, null, "row"]}
            alignItems={["center", null, null, "baseline"]}
            justifyContent="space-between"
            flexGrow="1"
            borderRadius={isOpen ? "0 0 0 65px" : null}
            boxShadow={isOpen ? "0 10px 20px rgba(0,0,0,.4)" : null}
            px={isOpen ? ["4", null, "11"] : 0}
            py={isOpen ? "10" : 0}
            left={0}
            bg="primaryDark"
            width="100%"
            position={isOpen ? "absolute" : "relative"}
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
