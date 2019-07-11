import React from "react"
import Layout from "../components/Layout"
import {
  Box,
  Container,
  SectionTitle,
  Text,
} from "../components/layout-components"
import Link, { linkStyles } from "../components/link"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

const Image = styled(Img)`
  border-radius: 0 65px 0 65px;
  width: 100%;
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 40px;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          about
        }
      }
      bostonImage: file(relativePath: { eq: "boston.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Container title="About React Boston">
        <Image
          fluid={data.bostonImage.childImageSharp.fluid}
          alt="Boston, MA"
        />
        <Text
          mb={10}
          css={css`
            a {
              ${linkStyles}
            }
          `}
          dangerouslySetInnerHTML={{
            __html: data.site.siteMetadata.about,
          }}
        />
        <SectionTitle mb={2}>Past Years</SectionTitle>
        <Text mb={2}>Have a look at our previous conferences:</Text>
        <Box as="ul" pl={8}>
          <li>
            <Link href="https://www.reactboston.com/2017/">2017</Link>
          </li>
          <li>
            <Link href="https://www.reactboston.com/2018/">2018</Link>
          </li>
        </Box>
      </Container>
    </Layout>
  )
}
