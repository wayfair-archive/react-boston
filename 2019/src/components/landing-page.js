/**
 * Landing Page component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "./seo"
import Hero from "./hero"
import styled from "@emotion/styled"
import CurvedBackgroundLayer from "../images/curved-background-layer"
import { theme } from "../global-styles/theme"
import { ThemeProvider } from "emotion-theming"
import { Box } from "./layout-components"

const Wrap = styled(Box.withComponent("main"))`
  min-height: 100vh;
  @supports (display: grid) {
    min-height: 0;
  }
`

const ImageWrap = styled(Box)`
  display: none;
  @media screen and (min-width: 40em) {
    @supports (display: grid) {
      display: block;
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
    }
  }
`

const LandingPage = children => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: { eq: "hero-background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Wrap
          display={["block", "grid"]}
          gridTemplateColumns="1fr"
          maxHeight={["none", "none", "100vh"]}
        >
          <Box
            position="relative"
            gridRow="1"
            zIndex="1"
            gridColumn="1"
            my={["0", "-8px"]}
            mx={["0", "-2px"]}
            pl={["0", "50vw"]}
          >
            <Box display={["none", "block"]}>
              <CurvedBackgroundLayer />
            </Box>
            <Box
              position={["static", "absolute"]}
              top={["200px", "100px"]}
              left="5vw"
              bottom="0"
              maxWidth="1200px"
              maxHeight={["none", "100vh"]}
              height="100%"
              width={["auto", "100%"]}
            >
              <SEO title="React Boston" keywords={[`react`, `Boston`]} />
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
            <Img fluid={data.file.childImageSharp.fluid} />
          </ImageWrap>
        </Wrap>
      </ThemeProvider>
    )}
  />
)

export default LandingPage
