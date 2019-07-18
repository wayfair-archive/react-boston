import React from "react"
import "../global-styles/base-reset.css"
import { Box, Text, SectionTitle, Title } from "../components/layout-components"
import Counter from "../components/counter"
import { linkStyles } from "../components/link"
import LogoText from "../images/logo-text"
import { graphql, useStaticQuery } from "gatsby"
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

const StyledTextWrap = styled.div`
  padding-top: 20px;
  a {
    ${linkStyles};
  }
`

const StyledImage = styled(Img)`
  border-bottom-left-radius: 65px;
  border-top-right-radius: 65px;
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
      fontSize={["4", "5"]}
      fontWeight="bold"
      p={["25px", null, "50px"]}
    >
      <Text mb="1em">September 21-22, 2019</Text>
      <Counter />
    </Box>
  </StyledWrap>
)

const Section = Box.withComponent("section")

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          about
        }
      }
      placeholderImage: file(relativePath: { eq: "stickers.png" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
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
        <Title
          fontSize={[5]}
          textAlign={["center", null, "left", null]}
          mt="40px"
          mb="3"
        >
          New England's annual two-day React.js conference
        </Title>
      </Section>
      <Box position="relative">
        <Timing />
        <Dots position="absolute" zIndex="-1" left="-50px" />
      </Box>
      <Box position="relative" display={["none", null, "block"]}>
        <StyledImage
          fluid={data.placeholderImage.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 50%"
          alt="React Boston stickers"
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
            pb={4}
            dangerouslySetInnerHTML={{
              __html: data.site.siteMetadata.about,
            }}
            lineHeight="2rem"
            backgroundColor="white"
          />
        </StyledTextWrap>
      </Section>
    </Box>
  )
}
