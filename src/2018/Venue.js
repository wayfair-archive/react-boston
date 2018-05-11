import React from 'react';
import { Card, CardSection, CardTitle } from './components/Card';
import { Container, SectionTitle, SectionWrap } from './components/Layout';
import Link from './components/Link';
import HoverCard from './components/HoverCard';
import styled from 'styled-components';
import { hotels } from './api/hotels';
import office1 from './images/wayfair-office-1.jpg';
import office2 from './images/wayfair-office-2.jpg';
import office3 from './images/wayfair-office-3.jpg';
import office4 from './images/wayfair-office-4.jpg';
import office5 from './images/wayfair-office-5.jpg';

const P = styled.p`
  margin-bottom: 1em;
`;

const SubTitle = styled.h4`
  color: ${({ theme }) => theme.color.dark};
  font-size: 1.8rem;
  margin-bottom: 0.5em;
`;

const Hotels = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
`;

const Hotel = ({ url, name, src }) => (
  <li>
    <HoverCard
      src={src}
      href={url}
      isCentered
      target="_blank"
      rel="noopener noreferrer"
    >
      <CardTitle>{name}</CardTitle>
    </HoverCard>
  </li>
);

const CardWrap = styled.div`
  max-width: 900px;
  grid-column: 1 / -1;
  position: relative;
  z-index: 2;
  margin: 0 auto 2em;
`;

const Location = styled.p`
  margin-bottom: 1em;
  display: flex;
`;

const Venue = ({ id }) => (
  <SectionWrap id={id}>
    <Container>
      <SectionTitle>Venue & Travel</SectionTitle>
    </Container>
    <CardWrap>
      <Card>
        <img src={office5} />
        <CardSection isLarge>
          <CardTitle isLarge>Wayfair</CardTitle>
          React Boston 2018 will be hosted at{' '}
          <Link openInNewWindow href="https://www.wayfair.com/about/">
            Wayfair
          </Link>'s headquarters,{' '}
          <Link openInNewWindow href="https://goo.gl/maps/qPNfQbpMpDw">
            4 Copley Place
          </Link>, in Boston's beautiful Back Bay neighborhood, walking distance
          from Copley Square, the Charles River, and the Boston Public Gardens.
        </CardSection>
      </Card>
    </CardWrap>
    <Container>
      <Location>
        <svg
          style={{ marginRight: 10 }}
          width="17"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.512 2.462A8.494 8.494 0 0 0 8.5 0C6.23 0 4.096.874 2.49 2.462c-2.972 2.937-3.341 8.464-.8 11.813L8.5 24l6.8-9.711c2.551-3.363 2.182-8.89-.79-11.827zm-5.933 8.934c-1.71 0-3.103-1.377-3.103-3.068 0-1.692 1.393-3.068 3.103-3.068 1.71 0 3.103 1.376 3.103 3.068 0 1.691-1.392 3.068-3.103 3.068z"
            fill="#F15959"
            fill-rule="nonzero"
          />
        </svg>
        Wayfair Headquarters:{' '}
        <Link
          openInNewWindow
          style={{ marginLeft: 5 }}
          href="https://www.google.com/maps/place/Wayfair/@42.3471219,-71.0805457,17z/data=!3m1!4b1!4m5!3m4!1s0x89e37a0dece25e71:0xe22c2dea6968659e!8m2!3d42.347118!4d-71.078357"
        >
          4 Copley Place, Boston MA 02116
        </Link>
      </Location>
      <SubTitle>The T</SubTitle>
      <P>
        The venue is easily accessible by local public transportation via the
        Orange Line to Back Bay or the Green Line to Copley Station. There are
        also several MBTA bus routes that stop at nearby St. James Avenue at
        Dartmouth Street or Back Bay Station.
      </P>
      <SubTitle>Parking</SubTitle>
      <P>
        If you are driving, the venue is accessible by several major highways.
        There are also local{' '}
        <Link
          openInNewWindow
          href="http://en.parkopedia.com/parking/locations/126_dartmouth_street_boston_ma_united_states_drt2ysukqwm/?country=us&arriving=201709230800&leaving=201709231900"
        >
          parking options available
        </Link>.
      </P>
      <SubTitle>By Plane or Rail</SubTitle>
      <P>
        If you are arriving from outside the Boston area, there are both air and
        rail options. You can fly into Logan International Airport (BOS), a 30
        minute drive or shuttle ride from the venue. If traveling by rail you
        can take Amtrak directly into Back Bay Station.
      </P>
      <SubTitle>Accommodations</SubTitle>
      <P>
        There are no official conference accommodations, but there are several
        hotels nearby, including:
      </P>
      <Hotels>
        {hotels.map(hotel => (
          <Hotel
            key={hotel.url}
            name={hotel.name}
            url={hotel.url}
            src={hotel.src}
          />
        ))}
      </Hotels>
    </Container>
  </SectionWrap>
);

export default Venue;
