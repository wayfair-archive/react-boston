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
import { css } from "@emotion/core"
import Link from "../components/link"
import office from "../images/venue.jpg"
import Westin from "../images/hotels/westin.jpg"
import Sheraton from "../images/hotels/sheraton.jpg"
import Marriott from "../images/hotels/marriott.jpg"
import Fairmont from "../images/hotels/fairmont.jpg"
import Colonnade from "../images/hotels/colonnade.jpg"
import Copley from "../images/hotels/copley.jpg"
import Courtyard from "../images/hotels/courtyard.jpg"
import styled from "@emotion/styled"

const hotelData = [
  {
    name: "Copley Square Hotel",
    url: "http://www.copleysquarehotel.com/",
    src: Copley,
  },
  {
    name: "Westin Copley Place",
    url: "http://www.westincopleyplaceboston.com/",
    src: Westin,
  },
  {
    name: "Boston Marriott Copley Place",
    url:
      "http://www.marriott.com/hotels/travel/bosco-boston-marriott-copley-place/",
    src: Marriott,
  },
  {
    name: "Courtyard Boston Copley Square",
    url:
      "http://www.marriott.com/hotels/maps/travel/bosdt-courtyard-boston-copley-square/",
    src: Courtyard,
  },
  {
    name: "Fairmont Copley Plaza",
    url: "http://www.fairmont.com/copley-plaza-boston/",
    src: Fairmont,
  },
  {
    name: "Sheraton Boston",
    url: "http://www.sheratonbostonhotel.com/",
    src: Sheraton,
  },
  {
    name: "Colonnade Hotel",
    url: "http://www.colonnadehotel.com/",
    src: Colonnade,
  },
]

const Hotel = ({ url, name }) => (
  <div>
    <h3>{name}</h3>
    <Box mt="10px" maxWidth="225px">
      <Button secondary href={url}>
        Book Your Stay
      </Button>
    </Box>
  </div>
)

const Image = styled.img`
  background: #f5f9fa;
  border-radius: 0 65px 0 65px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.15);
`

export default () => (
  <Layout>
    <Container title="Venue">
      <Box
        display="grid"
        gridGap={9}
        gridTemplateColumns={["1fr", "1fr 1fr"]}
        mb={11}
      >
        <Image src={office} alt="Wayfair Office" />
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
            , in Boston's beautiful Back Bay neighborhood, walking distance from
            Copley Square, the Charles River, and the Boston Public Gardens.
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
            There are also several MBTA bus routes that stop at nearby St. James
            Avenue at Dartmouth Street or Back Bay Station.
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
            If you are arriving from outside the Boston area, there are both air
            and rail options. You can fly into Logan International Airport
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
          There are no official conference accommodations, but there are several
          hotels nearby, including:
        </Text>
        <Box
          display="grid"
          gridTemplateColumns={"repeat(2, 1fr)"}
          gridGap="40px"
        >
          {hotelData.map(({ url, name, src }) => (
            <>
              <Hotel key={url} name={name} url={url} />
              <Image src={src} />
            </>
          ))}
        </Box>
      </Box>
    </Container>
  </Layout>
)
