import React from "react"
import "../global-styles/base-reset.css"
import { Box, Text } from "../components/layout-components"
import Counter from "../components/counter"
import LogoText from "../images/logo-text"
import FullLogo from "../images/icons/full-logo"
import { StaticQuery, graphql } from "gatsby"
import Stickers from "../images/stickers.png"
import Dots from "../components/dots"
import styled from "@emotion/styled"

const StyledWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  padding: 90px 50px;
  border-bottom-left-radius: 15%;
  border-top-right-radius: 15%;
  box-shadow: 16px 18px 20px -2px rgba(0, 0, 0, 0.3);
`

const StyledTitle = styled.h1`
  font-style: italic;
`

const StyledSectionTitle = styled.h2`
  padding-top: 20px;
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
    color: ${({ theme }) => theme.colors.secondaryDark};
  }
`

const StyledImage = styled.img`
  border-bottom-left-radius: 15%;
  border-top-right-radius: 15%;
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
    >
      September 21-23, 2019
    </Box>
    <Counter />
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
      }
    `}
    render={data => {
      return (
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)">
          <Section pr="24px">
            <FullLogo />
            <StyledSectionTitle>
              New England's annual two-day React.js conference
            </StyledSectionTitle>
          </Section>
          <Box position="relative">
            <Timing />
            <Dots position="absolute" zIndex="-1" left="-50px" />
          </Box>
          <Box position="relative">
            <StyledImage src={Stickers} alt="React stickers" />
            <Dots
              position="absolute"
              zIndex="-1"
              right="-50px"
              containerRightOffset="0"
              top="100px"
              height="400px"
            />
          </Box>
          <Section pt="100px" pl="100px">
            <StyledTitle>Join Us!</StyledTitle>
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
