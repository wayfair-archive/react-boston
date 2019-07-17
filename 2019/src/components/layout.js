/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import { Box } from "../components/layout-components"
import Transition from "./transition"
import { theme } from "../global-styles/theme"
import { ThemeProvider } from "emotion-theming"
import SEO from "../components/Seo"
import "../global-styles/base-reset.css"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <SEO title={data.site.siteMetadata.title} />
      <Box
        display="grid"
        minHeight="100vh"
        gridTemplateRows="min-content auto min-content"
        position="relative"
      >
        <Header />
        <main>
          <Transition {...props}>{props.children}</Transition>
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
