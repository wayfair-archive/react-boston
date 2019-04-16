// @flow
/**
 * Landing Page component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "./image"
import SEO from "./seo"
import Hero from "./hero"
import styled from "@emotion/styled"
import CurvedBackgroundLayer from "../images/curved-background-layer"
import { theme } from "../global-styles/theme"
import { ThemeProvider } from "emotion-theming"
import { Box } from "./layout-components"

const Wrap = Box.withComponent("main")

const ImageWrap = styled(Box)`
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #2160ad;
    opacity: 0.7;
    @supports (mix-blend-mode: multiply) {
      opacity: 1;
      mix-blend-mode: multiply;
    }
  }
`

const LandingPage = ({ children }: React.Node) => (
  <StaticQuery
    query={graphql`
      query LandingPageTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Wrap
          display="grid"
          gridTemplateColumns="1fr"
          maxHeight={["none", "none", "100vh"]}
          overflow={["visible", "visible", "hidden"]}
        >
          <Box
            position="relative"
            gridRow="1"
            zIndex="1"
            gridColumn="1"
            my="-8px"
            mx="-2px"
            pl="50vw"
          >
            <CurvedBackgroundLayer />
            <Box
              position="absolute"
              top={["200px", "100px", 0]}
              left="5vw"
              bottom="0"
              maxWidth="1200px"
              maxHeight={["none", "100vh"]}
              height="100%"
              width={["auto", "100%"]}
              display="flex"
              alignItems="center"
            >
              <SEO title="Home" keywords={[`react`, `Boston`]} />
              <Hero />
            </Box>
          </Box>
          <ImageWrap
            position="relative"
            overflow="hidden"
            zIndex="-1"
            gridRow="1"
            gridColumn="1"
            marginLeft="50vw"
          >
            <Image />
          </ImageWrap>
        </Wrap>
      </ThemeProvider>
    )}
  />
)

export default LandingPage
