import React from "react"
import "../global-styles/base-reset.css"
import { Box } from "../components/layout-components"
import Counter from "../components/counter"
import LogoText from "../images/logo-text"
import ImageBanner from "../images/image-banner"
import styled from "@emotion/styled"

const StyledWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  padding: 80px 50px;
  border-bottom-left-radius: 15%;
  border-top-right-radius: 15%;
  box-shadow: 25px 25px 30px rgba(0,0,0,0.3);
`
const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: underline;
`

const StyledTitle = styled.h1`
  font-style: italic;
`

const StyledSectionTitle = styled.h2`
  padding-top: 20px;
`

const StyledText = styled.p`
  line-height: 2rem;
  padding-top: 20px;
`

const StyledDotsWrap = styled.div`
  width: 150px;
  overflow: hidden;
  position: absolute;
  top: -35px;
  left: -36px;
  z-index: -1;
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

export default () => (
  <Box
    display="grid"
    gridTemplateColumns="repeat(2, 1fr)"
  >
    <Box>
      <LogoText />
      <StyledSectionTitle>New England's annual two-day React.js conference</StyledSectionTitle>
    </Box>
    <Box position="relative">
      <Timing />
      <StyledDotsWrap>
        <Box
          width="1000px"
          height="100%"
        >
          <ImageBanner />
          <Box pt="2px">
              <ImageBanner />
          </Box>
          <Box pt="2px">
            <ImageBanner />
          </Box>
        </Box>
      </StyledDotsWrap>
    </Box>
    <LogoText />
    <Box pt="100px">
      <StyledTitle>Join Us!</StyledTitle>
      <StyledText>
        React Boston is a two-day, single-track conference on React hosted in Boston's Back Bay neighborhood
        and organized in collaboration with <StyledLink>Wayfair Engineering</StyledLink> and the <StyledLink>ReactJS Boston Meetup</StyledLink>.
        We're excited to welcome developers of all backgrounds, skill sets, and expereince levels to join us for a weekend of
        high-quality content and great conversations with others in the developer community.
      </StyledText>
    </Box>
  </Box>
)