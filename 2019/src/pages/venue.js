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

const Hotel = ({ url, name, src }) => (
  <>
    <div>
      <h3>{name}</h3>
      <Box mt="10px" maxWidth="225px">
        <Button secondary href={url}>
          Book Your Stay
        </Button>
      </Box>
    </div>
    <Image fluid={src.node.childImageSharp.fluid} />
  </>
)

const Image = styled(Img)`
  background: #f5f9fa;
  border-radius: 0 65px 0 65px;
  width: 100%;
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.15);
`

const HOTELS = [
  {
    name: "Copley Square Hotel",
    url: "http://www.copleysquarehotel.com/",
    key: "copley",
  },
  {
    name: "Westin Copley Place",
    url: "http://www.westincopleyplaceboston.com/",
    key: "westin",
  },
  {
    name: "Boston Marriott Copley Place",
    url:
      "http://www.marriott.com/hotels/travel/bosco-boston-marriott-copley-place/",
    key: "marriott",
  },
  {
    name: "Courtyard Boston Copley Square",
    url:
      "http://www.marriott.com/hotels/maps/travel/bosdt-courtyard-boston-copley-square/",
    key: "courtyard",
  },
  {
    name: "Fairmont Copley Plaza",
    url: "http://www.fairmont.com/copley-plaza-boston/",
    key: "fairmont",
  },
  {
    name: "Sheraton Boston",
    url: "http://www.sheratonbostonhotel.com/",
    key: "sheraton",
  },
  {
    name: "Colonnade Hotel",
    url: "http://www.colonnadehotel.com/",
    key: "colonnade",
  },
]

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
      allFile(
        sort: { fields: name, order: DESC }
        filter: { relativeDirectory: { eq: "hotels" } }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const {
    allFile: { edges },
  } = data

  const hotelData = HOTELS.map(hotel => {
    return {
      ...hotel,
      src: edges.find(({ node }) => {
        return node.name === hotel.key ? node : null
      }),
    }
  })

  return (
    <Layout>
      <Container title="Venue">
        <Box
          display="grid"
          gridGap={9}
          gridTemplateColumns={["1fr", "1fr 1fr"]}
          mb={11}
        >
          <Image
            fluid={data.wayfair.childImageSharp.fluid}
            alt="Wayfair Office"
          />
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
          mb={11}
        >
          <div>
            <ParagraphTitle mb={4}>Public Transportation</ParagraphTitle>
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
            <ParagraphTitle mb={4}>Parking</ParagraphTitle>
            <Text mb={4}>
              If you are driving, the venue is accessible by several major
              highways. There are also local parking options available.
            </Text>
          </div>
          <div>
            <ParagraphTitle mb={4}>By Plane or Rail</ParagraphTitle>
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
          <SectionTitle fontStyle="italic" mb={4} fontSize={4}>
            Accommodations
          </SectionTitle>
          <Text mb={10}>
            There are no official conference accommodations, but there are
            several hotels nearby, including:
          </Text>
          <Box
            display="grid"
            gridTemplateColumns={"repeat(2, 1fr)"}
            gridGap="40px"
          >
            {hotelData.map(hotel => (
              <Hotel key={hotel.url} {...hotel} />
            ))}
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}
