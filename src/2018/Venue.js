import React from 'react';
import { Flex, Box } from 'grid-styled';
import { Container, PageBlock } from '../components/Layout';
import Heading from '../components/Heading';
import Link from '../components/Link';
import styled from 'styled-components';
import copley from '../images/copley.jpg';
import { mapStyles } from '../map-styles';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs
} from 'react-google-maps';

const P = styled.p`
  margin-bottom: 1em;
`;
const VenueIntro = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1.5em;
`;
const Hotels = styled.ul`
  list-style: square;
  margin-left: 2em;
  margin: 0 0 2em 2em;
`;

const Hotel = ({ url, name }) => (
  <li>
    <Link openInNewWindow href={url}>
      {name}
    </Link>
  </li>
);

const CopleyIMG = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`;

const hotelData = [
  {
    name: 'Copley Square Hotel',
    url: 'http://www.copleysquarehotel.com/'
  },
  {
    name: 'Westin Copley Place',
    url: 'http://www.westincopleyplaceboston.com/'
  },
  {
    name: 'Boston Marriott Copley Place',
    url:
      'http://www.marriott.com/hotels/travel/bosco-boston-marriott-copley-place/'
  },
  {
    name: 'Courtyard Boston Copley Square',
    url:
      'http://www.marriott.com/hotels/maps/travel/bosdt-courtyard-boston-copley-square/'
  },
  {
    name: 'Fairmont Copley Plaza',
    url: 'http://www.fairmont.com/copley-plaza-boston/'
  },
  {
    name: 'Sheraton Boston',
    url: 'http://www.sheratonbostonhotel.com/'
  },
  {
    name: 'Colonnade Hotel',
    url: 'http://www.colonnadehotel.com/'
  }
];

const VenueMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={13}
      defaultCenter={{ lat: 42.3472369, lng: -71.077868 }}
      defaultOptions={{
        styles: mapStyles,
        scrollwheel: false
      }}
    >
      <Marker defaultPosition={{ lat: 42.3472369, lng: -71.077868 }} />
    </GoogleMap>
  ))
);

const Venue = props => (
  <PageBlock {...props}>
    <Heading title="Venue" centered />
    <VenueMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAaZTLgIndskuG_6fcKl2TE7ElvFINbVrQ"
      loadingElement={<div />}
      containerElement={<div style={{ height: `500px`, width: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    <Container style={{ paddingTop: '2em' }}>
      <Flex wrap>
        <Box width={[1, 2 / 3]} pr={20}>
          <VenueIntro>
            React Boston 2018 will be hosted at{' '}
            <Link openInNewWindow href="https://www.wayfair.com/about/">
              Wayfair
            </Link>'s headquarters,{' '}
            <Link openInNewWindow href="https://goo.gl/maps/qPNfQbpMpDw">
              4 Copley Place
            </Link>, in Boston's beautiful Back Bay neighborhood, walking
            distance from Copley Square, the Charles River, and the Boston
            Public Gardens.
          </VenueIntro>
          <Heading title="Travel" level={3} />
          <P>
            The venue is easily accessible by local public transportation via
            the Orange Line to Back Bay or the Green Line to Copley Station.
            There are also several MBTA bus routes that stop at nearby St. James
            Avenue at Dartmouth Street or Back Bay Station.
          </P>
          <P>
            If you are driving, the venue is accessible by several major
            highways. There are also local{' '}
            <Link
              openInNewWindow
              href="http://en.parkopedia.com/parking/locations/126_dartmouth_street_boston_ma_united_states_drt2ysukqwm/?country=us&arriving=201709230800&leaving=201709231900"
            >
              parking options available
            </Link>.
          </P>
          <P>
            If you are arriving from outside the Boston area, there are both air
            and rail options. You can fly into Logan International Airport
            (BOS), a 30 minute drive or shuttle ride from the venue. If
            traveling by rail you can take Amtrak directly into Back Bay
            Station.
          </P>
          <Heading title="Accommodations" level={3} />
          <P>
            There are no official conference accommodations, but there are
            several hotels nearby, including:
          </P>
          <Hotels>
            {hotelData.map(hotel => (
              <Hotel key={hotel.url} name={hotel.name} url={hotel.url} />
            ))}
          </Hotels>
        </Box>
        <Box width={[1, 1 / 3]}>
          <CopleyIMG alt="Boston" src={copley} />
        </Box>
      </Flex>
    </Container>
  </PageBlock>
);

export default Venue;
