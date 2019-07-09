import React, { useState } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Button from "./button"

import LogoText from "../images/logo-text"
import FullLogo from "../images/icons/full-logo"
import Logo from "../images/logo"

const NavLink = props => (
  <Link
    css={css`
      display: block;
      text-align: center;
      padding: 10px;
      text-decoration: none;
      @media screen and (min-width: 1100px) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
    activeStyle={{ textDecoration: "underline" }}
    {...props}
  />
)

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(isOpen => !isOpen)
  return (
    <header
      css={css`
        display: grid;
        grid-template-columns: 1fr 2fr;
        @media screen and (min-width: 1100px) {
          grid-template-columns: 20% 1fr;
        }
      `}
    >
      <Link
        to="/"
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 10px;
        `}
      >
        <Logo
          css={css`
            width: 200px;
            max-width: 100%;
          `}
        />
        {/* <LogoText
          css={css`
            max-width: 175px;
          `}
        /> */}
        {/* <FullLogo /> */}
      </Link>

      <div
        css={theme => css`
          background-color: ${theme.colors.primaryDark};
          padding: 10px 10px;
          color: white;
          border-bottom-left-radius: 65px;
          @media screen and (min-width: 1100px) {
            padding: 0;
            background-color: transparent;
          }
        `}
      >
        <button
          css={css`
            display: block;
            position: ${isOpen ? "fixed" : "static"};
            height: 60px;
            width: 60px;
            top: 10px;
            z-index: 2;
            background: white;
            right: 10px;
            margin-left: auto;
            @media screen and (min-width: 1100px) {
              display: none;
            }
          `}
          onClick={toggleMenu}
        >
          menu
        </button>
        <nav
          css={theme => css`
            background-color: ${theme.colors.primaryDark};
            padding: 40px;
            display: ${isOpen ? "flex" : "none"};
            position: fixed;
            flex-direction: column;
            padding-top: 100px;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            height: 100%;
            border-bottom-left-radius: 50vw;
            box-shadow: 0 20px 20px rgba(0, 0, 0, 0.6);
            @media screen and (min-width: 1100px) {
              padding: 0 40px 0 60px;
              flex-direction: row;
              position: static;
              display: flex;
              flex-wrap: nowrap;
              align-items: center;
              justify-content: space-between;
              border-bottom-left-radius: 65px;
              box-shadow: none;
            }
            a {
              color: white;
            }
          `}
        >
          <NavLink to="/speakers">Speakers</NavLink>
          <NavLink to="/schedule">Schedule</NavLink>
          <NavLink to="/venue">Venue & Travel</NavLink>
          <NavLink to="/diversity">Diversity</NavLink>
          <NavLink to="/sponsors">Sponsors</NavLink>
          <NavLink to="/conduct">Conduct</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button
            css={css`
              order: -1;
              @media screen and (min-width: 1100px) {
                order: 1;
              }
            `}
            href="https://www.eventbrite.com/e/react-boston-2019-tickets-61701810777"
          >
            Buy Tickets
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header
