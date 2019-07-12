import React from "react"
import Layout from "../components/Layout"
import {
  Box,
  Text,
  Container,
  SectionTitle,
  ParagraphTitle,
  Section,
} from "../components/layout-components"
import Button from "../components/button"
import Link from "../components/link"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Hotel = ({ url, name, img, directions }) => (
  <>
    <div>
      <h3>{name}</h3>
      <Box mt="6" maxWidth="225px">
        <Button secondary href={url}>
          Book Your Stay
        </Button>
      </Box>
      <Box mt="6" maxWidth="225px" fontSize="2" textAlign="center">
        <Link href={directions}>Directions</Link>
      </Box>
    </div>
    <Image fluid={img.src.childImageSharp.fluid} />
  </>
)

const Image = styled(Img)`
  background: #f5f9fa;
  border-radius: 0 65px 0 65px;
  width: 100%;
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.15);
  max-width: 550px;
  max-height: 380px;
`
export default () => {
  const data = useStaticQuery(graphql`
    query {
      wayfair: file(relativePath: { eq: "venue.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      allHotelsJson {
        edges {
          node {
            name
            url
            directions
            key
            img {
              src {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const {
    allHotelsJson: { edges },
    wayfair,
  } = data

  return (
    <Layout>
      <Container title="Venue">
        <Box
          display="grid"
          gridGap={9}
          gridTemplateColumns={["1fr", "1fr 1fr"]}
          mb={12}
          alignItems="center"
        >
          <Image fluid={wayfair.childImageSharp.fluid} alt="Wayfair Office" />
          <Section pt={4}>
            <SectionTitle mb={4} fontSize={4} fontWeight="bold">
              Wayfair
            </SectionTitle>
            <Text mb={4}>
              React Boston 2019 will be hosted at{" "}
              <Link href="https://www.wayfair.com/about/" openInNewTab>
                Wayfair's
              </Link>{" "}
              headquarters,{" "}
              <Link href="https://goo.gl/maps/qPNfQbpMpDw" openInNewTab>
                4 Copley Place
              </Link>
              , in Boston's beautiful Back Bay neighborhood, walking distance
              from Copley Square, the Charles River, and the Boston Public
              Gardens.
            </Text>
            <Button secondary>Directions to Wayfair</Button>
          </Section>
        </Box>
        <Box
          display="grid"
          gridGap="10"
          gridTemplateColumns={["1fr", null, "1fr 1fr 1fr", null]}
          mb={6}
          justifyItems="center"
        >
          <div>
            <ParagraphTitle textAlign="center" mb={4}>
              Public Transportation
            </ParagraphTitle>
            <Text mb={4}>
              The venue is easily accessible by local public transportation via
              the Orange Line to Back Bay or the Green Line to Copley Station.
              There are also several{" "}
              <Link href="https://www.mbta.com/" openInNewTab>
                MBTA
              </Link>{" "}
              bus routes that stop at nearby St. James Avenue at Dartmouth
              Street or Back Bay Station.
            </Text>
          </div>
          <div>
            <ParagraphTitle textAlign="center" mb={4}>
              Parking
            </ParagraphTitle>
            <Text mb={4}>
              If you are driving, the venue is accessible by several major
              highways. There are also local parking options available.
            </Text>
          </div>
          <div>
            <ParagraphTitle textAlign="center" mb={4}>
              By Plane or Rail
            </ParagraphTitle>
            <Text mb={4}>
              If you are arriving from outside the Boston area, there are both
              air and rail options. You can fly into Logan International Airport
              (BOS), a 30 minute drive or shuttle ride from the venue. If
              traveling by rail you can take Amtrak directly into Back Bay
              Station.
            </Text>
          </div>
        </Box>
        <Box>
          <SectionTitle
            fontStyle="italic"
            mb={4}
            fontSize={4}
            textAlign="center"
          >
            Accommodations
          </SectionTitle>
          <Text mb={10} textAlign="center">
            There are no official conference accommodations, but there are
            several hotels nearby, including:
          </Text>
          <Box
            display="grid"
            gridTemplateColumns={"repeat(2, 1fr)"}
            gridGap="40px 0"
            alignItems="center"
            justifyItems="center"
          >
            {edges.map(({ node }) => (
              <Hotel key={node.url} {...node} />
            ))}
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}
