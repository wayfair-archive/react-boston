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
import styled from "@emotion/styled"

const Image = styled.img`
  background: #f5f9fa;
  padding: 10px;
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
      <Box display="grid" gridGap="40px" gridTemplateColumns="1fr 1fr">
        <Image src={office} alt="Wayfair Office" />
        <Section pt={4}>
          <SectionTitle mb={4} fontSize={4} fontWeight="bold">
            Wayfair
          </SectionTitle>
          <Text
            mb={4}
            css={css`
              max-width: 300px;
            `}
          >
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
        <Section>
          <ParagraphTitle>Public Transportation</ParagraphTitle>
          <Text
            mb={4}
            css={css`
              max-width: 300px;
            `}
          >
            The venue is easily accessible by local public transportation via
            the Orange Line to Back Bay or the Green Line to Copley Station.
            There are also several MBTA bus routes that stop at nearby St. James
            Avenue at Dartmouth Street or Back Bay Station.
          </Text>
        </Section>
        <Section>
          <ParagraphTitle>Parking</ParagraphTitle>
          <Text
            mb={4}
            css={css`
              max-width: 300px;
            `}
          >
            If you are driving, the venue is accessible by several major
            highways. There are also local parking options available.
          </Text>
        </Section>
        <Section>
          <ParagraphTitle>By Plane or Rail</ParagraphTitle>
          <Text
            mb={4}
            css={css`
              max-width: 300px;
            `}
          >
            If you are arriving from outside the Boston area, there are both air
            and rail options. You can fly into Logan International Airport
            (BOS), a 30 minute drive or shuttle ride from the venue. If
            traveling by rail you can take Amtrak directly into Back Bay
            Station.
          </Text>
        </Section>
        <Section>
          <ParagraphTitle mb={4} fontSize={4} fontWeight="bold">
            Accomodations
          </ParagraphTitle>
          <Text
            mb={4}
            css={css`
              max-width: 300px;
            `}
          >
            There are no official conference accommodations, but there are
            several hotels nearby, including:
          </Text>
        </Section>
      </Box>
    </Container>
  </Layout>
)
