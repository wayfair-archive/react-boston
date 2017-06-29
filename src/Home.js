import React from 'react';
import { Flex, Box } from 'grid-styled';
import { scroller, Helpers } from 'react-scroll';
import { mapStyles } from './utils';

import boston from './images/hero.jpg';
import copley from './images/copley.jpg';

import Header from './components/Header';
import { Logo } from './Logo';
import Button from './components/Button';
import Speaker from './components/Speaker';
import Heading from './components/Heading';
import Footer from './components/Footer';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

const speakerList = [];

const PageBlock = props =>
  <section {...props} className="PageBlock">
    {props.children}
  </section>;

const PageScrollSection = Helpers.Element(PageBlock);

const scrollToElement = e => {
  const href = e.target.hash.split('#')[1];
  e.preventDefault();
  scroller.scrollTo(href, {
    duration: 1000,
    offset: -55,
    smooth: 'easeInOutQuint'
  });
};

const VenueMap = withScriptjs(
  withGoogleMap(props =>
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={13}
      defaultCenter={{ lat: 42.3472369, lng: -71.077868 }}
      defaultOptions={{
        styles: mapStyles,
        scrollwheel: false
      }}
    >
      <Marker defaultPosition={{ lat: 42.3472369, lng: -71.077868 }}/>
    </GoogleMap>
  )
);

const Home = () =>
  <div>
    <Header
      items={[
        { name: 'Speakers', href: '#speakers' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'Venue', href: '#venue' }
      ]}
      onClick={scrollToElement}
    />
    <div className="Hero" id="hero">
      <div className="Hero-image" style={{ backgroundImage: `url('${boston}')` }} />
      <div className="Hero-content">
        <div className="Hero-logo">
          <Logo />
        </div>
        <h1 className="Hero-title">React Boston</h1>
        <h3 className="Hero-subtitle">
          September 23-24, 2017 | Boston, MA<br />New England's first two-day React.js conference.
        </h3>
        <Button onClick={scrollToElement} href="#tickets">
          Get Tickets
        </Button>
        <Button href={"https://goo.gl/forms/e25LNsS3KXPAwO3r2"} alternate openInNewWindow >Call for Speakers</Button>
        <h3 className="Hero-subtitle">
          Call for Speakers open until July 31, 2017
        </h3>
      </div>
    </div>

    <section className="PageBlock">
      <div className="Container">
        <Flex wrap>
          <Box width={[1, 3/3]} pr={20}>
            <Heading title="Two-Day Conference on React.js" level={3} />
            <p style={{ marginBottom: '1em' }}>
              React Boston is a two-day, single-track conference on React.js hosted in Boston's Back Bay neighborhood and organized in collaboration with <a href="http://engineering.wayfair.com/">Wayfair Engineering</a> and the <a href="https://meetup.com/ReactJS-Boston/">ReactJS Boston Meetup</a>.  We're excited to welcome developers of all backgrounds, skill sets, experience levels to join us for a weekend of high-quality content and great conversations with others in the developer community.
             </p>
          </Box>
        </Flex>
      </div>
    </section>

    <PageScrollSection name="speakers" id="speakers">
      <div className="Container">
        <Heading title="Speakers" centered />
        <div className="CFP">
          <p>Initial speakers will be announced soon, but there's still time to submit your own talk! The call for speakers is open until <strong>July 31, 2017</strong>.</p>
          <Button href={"https://goo.gl/forms/e25LNsS3KXPAwO3r2"} alternate openInNewWindow >Submit A Proposal!</Button>
        </div>
        <div className="SpeakerGrid">
          <Flex wrap>
            {speakerList.map((speaker, i) =>
              <Box width={[1, 1 / 3]} px={[10]} key={i}>
                <Speaker {...speaker} />
              </Box>
            )}
          </Flex>
        </div>
      </div>
    </PageScrollSection>

    <PageScrollSection id="tickets">
      <div className="Container">
        <Heading title="Get Tickets" centered />
        <iframe
          style={{ display: 'block', maxWidth: 1080, margin: '0 auto' }}
          src="//eventbrite.com/tickets-external?eid=35695465097&ref=etckt"
          title="Get Tickets"
          frameBorder="0"
          height="360"
          width="100%"
          marginHeight="5"
          marginWidth="5"
          scrolling="auto"
          allowTransparency="true"
        />
      </div>
    </PageScrollSection>

    <PageScrollSection id="schedule">
      <div className="Container">
        <Heading title="Schedule" centered />
        <p style={{textAlign: 'center' }}>Coming Soon...</p>
      </div>
    </PageScrollSection>



    <PageScrollSection id="venue">
        <Heading title="Venue" centered />
                <VenueMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAaZTLgIndskuG_6fcKl2TE7ElvFINbVrQ"
      loadingElement={<div />}
      containerElement={<div style={{ height: `500px`, width: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
                <div style={{ paddingTop: '2em'}} className="Container">
        <Flex wrap>
          <Box width={[1, 2 / 3]} pr={20}>
            <p style={{ marginBottom: '2em', fontSize: '1.1em', fontWeight: 'bold' }}>
              The conference will be hosted at <a href="https://www.wayfair.com/about/">Wayfair</a>'s headquarters, <a href="https://goo.gl/maps/qPNfQbpMpDw">4 Copley Place</a>, in Boston's beautiful Back Bay neighborhood, walking distance from Copley Square, the Charles River, and the Boston Public Gardens.
            </p>
            <Heading title="Travel" level={3} />
            <p style={{ marginBottom: '1em' }}>The venue is easily accessible by local public transportation via the Orange Line to Back Bay or the Green Line to Copley Station.  There are also several MBTA bus routes that stop at nearby St. James Avenue at Dartmouth Street or Back Bay Station.</p>
            <p style={{ marginBottom: '1em' }}>If you are driving, the venue is accessible by several major highways.  There are also local <a href="http://en.parkopedia.com/parking/locations/126_dartmouth_street_boston_ma_united_states_drt2ysukqwm/?country=us&arriving=201709230800&leaving=201709231900">parking options available</a>.</p>
            <p style={{ marginBottom: '1em' }}>If you are arriving from outside the Boston area, there are both air and rail options.  You can fly into Logan International Airport (BOS), a 30 minute drive or shuttle ride from the venue. If traveling by rail you can take Amtrak directly into Back Bay Station.</p>
            <Heading title="Accommodations" level={3} />
            <p style={{ marginBottom: '1em' }}>There are no official conference accommodations, but there are several hotels nearby, including:</p>
            <ul style={{ listStyle: 'square', marginLeft: '2.5em', marginBotton: '3em', paddingBottom: '1em' }}>
              <li><a href="http://www.copleysquarehotel.com/">Copley Square Hotel</a></li>
              <li><a href="http://www.westincopleyplaceboston.com/">Westin Copley Place</a></li>
              <li><a href="http://www.marriott.com/hotels/travel/bosco-boston-marriott-copley-place/">Boston Marriott Copley Place</a></li>
              <li><a href="http://www.marriott.com/hotels/maps/travel/bosdt-courtyard-boston-copley-square/">Courtyard Boston Copley Square</a></li>
              <li><a href="http://www.fairmont.com/copley-plaza-boston/">Fairmont Copley Plaza</a></li>
              <li><a href="http://www.sheratonbostonhotel.com/">Sheraton Boston</a></li>
              <li><a href="http://www.colonnadehotel.com/">Colonnade Hotel</a></li>
            </ul>
          </Box>
          <Box width={[1, 1 / 3]}>
            <img style={{maxWidth: '100%', height: 'auto'}}src={copley} />
          </Box>
        </Flex>
      </div>
        </PageScrollSection>

    <Footer />
  </div>;

export { Home };