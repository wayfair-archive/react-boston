import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

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
      <a>About</a>
      <a>Speakers</a>
      <a>Schedule</a>
      <Link to="venue">Venue & Travel</Link>
      <Link to="diversity">Diversity</Link>
      <a>Sponsors</a>
      <Link to="conduct">Conduct</Link>
      <a>Buy Tickets</a>
    </nav>
  </header>
)

export default Header
