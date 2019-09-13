import React from "react"
import { Text, Container, Box } from "../components/layout-components"
import Link from "../components/link"
import WayfairLogo from "../images/icons/wf-logo"
import { css } from "@emotion/core"
import Button from "../components/button"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const LogoCard = styled.div`
  background: #f5f9fa;
  padding: 10px;
  border-radius: 0 65px 0 65px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.15);
  height: 300px;
`

const Image = styled(Img)`
  width: 250px;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      sponsorImage: file(relativePath: { eq: "validity-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Container title="React Boston 2019 is sponsored and hosted by:">
      <Box
        display="grid"
        gridGap="40px"
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        gridTemplateRows="1fr"
        alignItems="center"
        mt="10"
      >
        <LogoCard>
          <WayfairLogo
            css={css`
              width: 250px;
              max-width: 100%;
            `}
          />
        </LogoCard>
        <Box pt={4}>
          <Text mb={4} fontSize={4} fontWeight="bold">
            Wayfair
          </Text>
          <Text mb={4}>
            We're the creative builders solving complex business problems
            through the newest and most innovative software in e-commerce.
          </Text>
          <Text mb={4}>
            <Link href="https://tech.wayfair.com/" openInNewTab>
              tech.wayfair.com
            </Link>
          </Text>
          <Text>
            <Link
              href="https://www.wayfair.com/careers/jobs/?teamIds=1"
              openInNewTab
            >
              wayfair.com/careers
            </Link>
          </Text>
        </Box>
      </Box>
      <Box
        display="grid"
        gridGap="40px"
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        gridTemplateRows="300px"
        mt={[10, null, null, 13]}
        alignItems="center"
      >
        <LogoCard>
          <Image alt="" fluid={data.sponsorImage.childImageSharp.fluid} />
        </LogoCard>
        <Box pt={4}>
          <Text mb={4} fontSize={4} fontWeight="bold">
            Validity
          </Text>
          <Text mb={4}>
            Businesses run better and grow faster with accurate data. Data that
            lets you target, engage and transact with customers, and do so more
            effectively than before.
          </Text>
          <Text mb={4}>
            Validity is the most trusted name in customer data quality. Tens of
            thousands of organizations rely on Validity solutions – including
            DemandTools, DupeBlocker, PeopleImport, BriteVerify and Trust
            Assessments – to manage their customer data. With Validity, these
            organizations make better decisions that drive more leads, close
            more deals and confidently plan for continued growth.
          </Text>
          <Text mb={4}>
            <Link href="https://validity.com" openInNewTab>
              validity.com
            </Link>
          </Text>
          <Text>
            <Link href="https://validity.com/careers/" openInNewTab>
              validity.com/careers
            </Link>
          </Text>
        </Box>
      </Box>
      <Box mt="13" mx="auto" width="300px">
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSfnoReme6hkXwSWDB6QGKKrCOu2GEFJbknxxiKV6vjL_dd4HQ/viewform"
          secondary
        >
          Interested in sponsoring?
        </Button>
      </Box>
    </Container>
  )
}
