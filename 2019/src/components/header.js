import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Button from "./Button"

const Header = () => (
  <header
    css={css`
      display: grid;
      grid-template-columns: 200px 1fr;
    `}
  >
    <Link
      to="/"
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      React Boston
    </Link>
    <nav
      css={theme => css`
        background-color: ${theme.colors.primaryDark};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 40px;
        color: white;
        a {
          color: white;
        }
      `}
    >
      <Link to="/">About</Link>
      <Link to="speakers">Speakers</Link>
      <Link to="schedule">Schedule</Link>
      <Link to="venue">Venue & Travel</Link>
      <Link to="diversity">Diversity</Link>
      <Link to="sponsors">Sponsors</Link>
      <Link to="conduct">Conduct</Link>
      <Button href="https://www.eventbrite.com/e/react-boston-2019-tickets-61701810777">
        Buy Tickets
      </Button>
    </nav>
  </header>
)

export default Header
