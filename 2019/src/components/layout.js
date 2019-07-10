/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import { theme } from "../global-styles/theme"
import { ThemeProvider } from "emotion-theming"
import { css } from "@emotion/core"
import "../global-styles/base-reset.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <div
          css={css`
            display: grid;
            min-height: 100vh;
            grid-template-rows: min-content auto min-content;
            position: relative;
          `}
        >
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
