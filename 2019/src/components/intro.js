import React from "react"
import "../global-styles/base-reset.css"
import { Box, Text, SectionTitle } from "../components/layout-components"
import Counter from "../components/counter"
import { linkStyles } from "../components/link"
import LogoText from "../images/logo-text"
import FullLogo from "../images/icons/full-logo"
import { StaticQuery, graphql } from "gatsby"
import Dots from "../components/dots"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const StyledWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  border-bottom-left-radius: 65px;
  border-top-right-radius: 65px;
  box-shadow: 16px 18px 20px -2px rgba(0, 0, 0, 0.3);
`

const StyledDotsWrapFirst = styled.div`
  width: 150px;
  overflow: hidden;
  position: absolute;
  top: -35px;
  left: -36px;
  z-index: -1;
`

const StyledDotsWrapSecond = styled.div`
  width: 150px;
  overflow: hidden;
  position: absolute;
  bottom: -37px;
  right: -44px;
  z-index: -1;
`

const StyledTextWrap = styled.div`
  padding-top: 20px;
  a {
    ${linkStyles};
  }
`

const StyledImage = styled(Img)`
  border-bottom-left-radius: 65px;
  border-top-right-radius: 65px;
  object-fit: cover;
  height: 450px;
  width: 100%;
  box-shadow: -11px 14px 20px -2px rgba(0, 0, 0, 0.3);
`

const Timing = () => (
  <StyledWrap>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      fontSize="5"
      fontWeight="bold"
      p={["40px", "25px", "25px", "50px"]}
    >
      <Text mb="1em">September 21-23, 2019</Text>
      <Counter />
    </Box>
  </StyledWrap>
)

const Section = Box.withComponent("section")

export default () => (
  <StaticQuery
    query={graphql`
      query JoinUsQuery {
        site {
          siteMetadata {
            about
          }
        }
        placeholderImage: file(relativePath: { eq: "stickers.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Box
          display="grid"
          gridTemplateColumns={["1fr", null, "repeat(2, minmax(325px,1fr))"]}
          gridGap="40px"
        >
          <Section>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={["center", null, "flex-start"]}
            >
              <LogoText
                css={css`
                  max-width: 400px;
                `}
              />
            </Box>
            <SectionTitle
              fontSize={[5]}
              textAlign={["center", null, "left", null]}
              mt="40px"
            >
              New England's annual two-day React.js conference
            </SectionTitle>
          </Section>
          <Box position="relative">
            <Timing />
            <Dots position="absolute" zIndex="-1" left="-50px" />
          </Box>
          <Box position="relative" display={["none", null, "block"]}>
            <StyledImage
              fluid={data.placeholderImage.childImageSharp.fluid}
              alt="React stickers"
            />
            <Dots
              position="absolute"
              zIndex="-1"
              right="-50px"
              containerRightOffset="0"
              top="100px"
              height="400px"
            />
          </Box>
          <Section
            pt={[null, null, null, "100px"]}
            pl={[null, null, null, "100px"]}
          >
            <SectionTitle fontSize={6} fontStyle="italic">
              Join Us!
            </SectionTitle>
            <StyledTextWrap>
              <Text
                mb={10}
                dangerouslySetInnerHTML={{
                  __html: data.site.siteMetadata.about,
                }}
                lineHeight="2rem"
              />
            </StyledTextWrap>
          </Section>
        </Box>
      )
    }}
  />
)
