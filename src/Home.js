import React from 'react';
import { Flex, Box } from 'grid-styled';
import { scroller, Helpers } from 'react-scroll';
import { mapStyles } from './utils';

import boston from './images/hero.jpg';
import copley from './images/copley.jpg';
import ReactGA from 'react-ga';
import Header from './components/Header';
import { Logo } from './Logo';
import Button from './components/Button';
import Speaker from './components/Speaker';
import Heading from './components/Heading';
import Footer from './components/Footer';
import aickin from './images/sasha_aickin.jpg';
import ilegbodu from './images/ben_ilegbodu.jpg';
import qabazard from './images/natalie_qabazard.jpg';
import zhu from './images/henry_zhu.jpg';
import pandya from './images/dhaivat_pandya.jpg';
import rizzitano from './images/ari_rizzitano.jpg';
import mcloughlin from './images/brendan_mcloughlin.jpg';
import holland from './images/christina_holland.jpg';
import cutts from './images/marcel_cutts.jpg';
import wheeler from './images/ken_wheeler.jpg';
import pak from './images/theo_pak.jpg';
import novick from './images/vladimir_novick.jpg';
import hough from './images/brian_hough.jpg';
import erikson from './images/mark_erikson.jpg';
import jacobson from './images/kenton_jacobson.jpg';
import sasidharan from './images/divya_sasidharan.jpg';
import sgo from './images/sgo.png';
import latinosintech from './images/latin@s_in_tech.jpg';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

const speakerList = [
  {
    name: 'Sasha Aickin',
    imageSrc: aickin,
    company: 'Former CTO of Redfin',
    twitter: 'https://twitter.com/xander76',
    github: 'https://github.com/aickin'
  },
  {
    name: 'Ben Ilegbodu',
    imageSrc: ilegbodu,
    company: 'Eventbrite',
    twitter: 'https://twitter.com/benmvp',
    github: 'https://github.com/benmvp'
  },
  {
    name: 'Natalie Qabazard',
    imageSrc: qabazard,
    company: 'Zillow Group',
    twitter: 'https://twitter.com/natqab',
    github: 'https://github.com/natqab'
  },
  {
    name: 'Henry Zhu',
    imageSrc: zhu,
    company: 'Behance/Adobe',
    twitter: 'https://twitter.com/left_pad',
    github: 'https://github.com/hzoo'
  },
  {
    name: 'Ari Rizzitano',
    imageSrc: rizzitano,
    company: 'edX',
    twitter: 'https://twitter.com/arizzitano',
    github: 'https://github.com/arizzitano'
  },
  {
    name: 'Dhaivat Pandya',
    imageSrc: pandya,
    company: 'Apollo/Meteor',
    twitter: 'https://twitter.com/dhaivatsays',
    github: 'https://github.com/Poincare'
  },
  {
    name: 'Kenton Jacobson',
    imageSrc: jacobson,
    company: 'Vogue, Glamour, GQ',
    twitter: 'https://twitter.com/kentonjacobsen',
    github: 'https://github.com/brokentone'
  },
  {
    name: 'Vladimir Novick',
    imageSrc: novick,
    company: 'CodeValue',
    twitter: 'https://twitter.com/VladimirNovick',
    github: 'https://github.com/vnovick'
  },
  {
    name: 'Marcel Cutts',
    imageSrc: cutts,
    company: 'Asgard',
    twitter: 'https://twitter.com/marcelcutts',
    github: 'https://github.com/marcelcutts'
  },
  {
    name: 'Divya Sasidharan',
    imageSrc: sasidharan,
    company: 'NU Knight Lab',
    twitter: 'https://twitter.com/shortdiv',
    github: 'https://github.com/shortdiv'
  },
  {
    name: 'Brendan McLoughlin',
    imageSrc: mcloughlin,
    company: 'Bocoup',
    twitter: 'https://twitter.com/BezoMaxo',
    github: 'https://github.com/bmac'
  },
  {
    name: 'Ken Wheeler',
    imageSrc: wheeler,
    company: 'Formidable',
    twitter: 'https://twitter.com/ken_wheeler',
    github: 'http://github.com/kenwheeler'
  },
  {
    name: 'Theo Pak',
    imageSrc: pak,
    company: 'HubSpot',
    twitter: 'https://twitter.com/theopak',
    github: 'https://github.com/theopak'
  },
  {
    name: 'Mark Erikson',
    imageSrc: erikson,
    company: 'Northrop Grumman',
    twitter: 'https://twitter.com/acemarke',
    github: 'https://github.com/markerikson'
  },
  {
    name: 'Christina Holland',
    imageSrc: holland,
    company: 'Pepperdata',
    twitter: 'https://twitter.com/americanwombat',
    github: 'https://github.com/hsubox76'
  },
  {
    name: 'Brian Hough',
    imageSrc: hough,
    company: 'New Relic',
    twitter: 'https://twitter.com/b_hough',
    github: 'https://github.com/bhough'
  }
];

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
  ReactGA.event({
    category: 'PageScroll',
    action: 'scrollToElement',
    label: href
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
      <Marker defaultPosition={{ lat: 42.3472369, lng: -71.077868 }} />
    </GoogleMap>
  )
);

const day1_talks = [
  { time: '8:00 - 9:00', title: 'Registration and Breakfast', speaker: '' },
  { time: '9:00 - 10:00', title: 'TBA', speaker: 'Ben Ilegbodu' },
  { time: '10:00 - 10:30', title: 'GraphQL: The Mental Model', speaker: 'Dhaivat Pandya' },
  { time: '10:30 - 11:00', title: 'Coffee Break', speaker: '' },
  {
    time: '11:00 - 12:00',
    title: 'You Might Need Redux (And Its Ecosystem)',
    speaker: 'Mark Erikson'
  },
  {
    time: '12:00 - 12:30',
    title: 'React + Charts, With and Without Libraries',
    speaker: 'Christina Holland'
  },
  { time: '12:30 - 2:00', title: 'Lunch', speaker: '' },
  {
    time: '2:00 - 2:30',
    title: 'Outside In TDD with React and Redux',
    speaker: 'Brendan McLoughlin'
  },
  { time: '2:30 - 3:00', title: 'Get That CSS Out Of Your JavaScript!', speaker: 'Brian Hough' },
  { time: '3:00 - 4:00', title: '⚡ Lightning Talks', speaker: '' },
  { time: '4:00 - 4:30', title: 'Coffee Break', speaker: '' },
  { time: '5:00 - 5:30', title: 'TBA', speaker: 'Henry Zhu' },
  {
    time: '5:00 - 5:30',
    title: 'Skeleton states save the day (and look good doing it)',
    speaker: 'Theo Pak'
  },
  { time: '5:30 - 6:00', title: 'Supercharging Your Maps with React', speaker: 'Divya Sasidharan' },
  { time: '6:30pm - 9pm', title: 'React Boston Party', speaker: 'Venue TBA' },
];
const day2_talks = [
  { time: '8:00 - 9:00', title: 'Breakfast', speaker: '' },
  { time: '9:00 - 10:00', title: 'TBA', speaker: 'Sasha Aickin' },
  { time: '10:00 - 10:30', title: 'Building Accessible Components', speaker: 'Ari Rizzitano' },
  { time: '10:30 - 11:00', title: 'Coffee Break', speaker: '' },
  { time: '11:00 - 12:00', title: 'A Pragmatist\'s Guide to ReasonML', speaker: 'Marcel Cutts' },
  { time: '12:00 - 12:30', title: 'Contex 101', speaker: 'Ken Wheeler' },
  { time: '12:30 - 2:00', title: 'Lunch', speaker: '' },
  { time: '2:00 - 2:30', title: 'TBA', speaker: 'Natalie Qabazard' },
  {
    time: '2:30 - 3:00',
    title: 'Your data is a moving target: Content migration',
    speaker: 'Kenton Jacobsen'
  },
  { time: '3:00 - 3:30', title: 'TBA', speaker: '' },
  { time: '3:30 - 4:00', title: 'Piloting a Drone with React - IoT', speaker: 'Vladimir Novick' }
];

const ScheduleRow = ({ time, children }) =>
  <Flex justify="center" wrap className="ScheduleRow">
    <Box width={[1, 1 / 3]} className="ScheduleRow-time">
      <span style={{fontSize: '1.2em'}}>{time}</span>
    </Box>
    <Box width={[1, 2 / 3]} className="ScheduleRow-details">
      {children}
    </Box>
  </Flex>;

const Talk = ({ time, title, speaker }) =>
  <ScheduleRow time={time}>
    <h2 style={{fontSize: '1.6em'}}>
      {title}
    </h2>
    <h3 style={{fontSize: '1.0em'}}>
      {speaker}
    </h3>
  </ScheduleRow>;

const Home = () =>
  <div>
    <Header
      items={[
        { name: 'Speakers', href: '#speakers' },
        { name: 'Tickets', href: '#tickets' },
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
        <Button href={'https://goo.gl/forms/zxBeQPtL8hOxJEAP2'} alternate openInNewWindow>
          Lightning Talks CFP
        </Button>
        <h3 className="Hero-subtitle">Lightning Talks CFP open until August 21, 2017</h3>
      </div>
    </div>

    <section className="PageBlock">
      <div className="Container">
        <Flex wrap>
          <Box width={[1, 3 / 3]} pr={20}>
            <Heading title="Two-Day Conference on React.js" level={3} />
            <p style={{ marginBottom: '1em' }}>
              React Boston is a two-day, single-track conference on React.js hosted in Boston's Back
              Bay neighborhood and organized in collaboration with{' '}
              <a target="_blank" rel="noopener noreferrer" href="http://engineering.wayfair.com/">
                Wayfair Engineering
              </a>{' '}
              and the{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://meetup.com/ReactJS-Boston/"
              >
                ReactJS Boston Meetup
              </a>. We're excited to welcome developers of all backgrounds, skill sets, experience
              levels to join us for a weekend of high-quality content and great conversations with
              others in the developer community.
            </p>
          </Box>
        </Flex>
      </div>
    </section>

    <PageScrollSection name="speakers" id="speakers">
      <div className="Container">
        <Heading title="Speakers" centered />
        <div className="CFP">
          <p>
            The full speaker list will be announced soon, but there's still time to submit a
            proposal for a lightning talk: CFP closes August 21, 2017!
          </p>
          <Button href={'https://goo.gl/forms/zxBeQPtL8hOxJEAP2'} alternate openInNewWindow>
            Submit a Lightning Talk!
          </Button>
        </div>
        <div className="SpeakerGrid">
          <Flex wrap>
            {speakerList.map((speaker, i) =>
              <Box width={[1, 1 / 4]} px={[10]} key={i}>
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
          height="520"
          width="100%"
          marginHeight="5"
          marginWidth="5"
          scrolling="auto"
          allowTransparency="true"
        />
      </div>
    </PageScrollSection>

    <PageScrollSection id="schedule">
      <div className="Schedule">
        <Heading title="Schedule" centered />
        <Heading level={3} title="Day 1: Saturday, September 23rd" centered />
        {day1_talks.map(data => <Talk {...data} />)}
      </div>
      <div className="Schedule">
        <Heading level={3} title="Day 2: Sunday, September 24th" centered />
        {day2_talks.map(data => <Talk {...data} />)}
        <p style={{fontSize: ".7em", marginTop: 20, paddingLeft: 20}}>Schedule is tentative, and subject to change.</p>
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
      <div style={{ paddingTop: '2em' }} className="Container">
        <Flex wrap>
          <Box width={[1, 2 / 3]} pr={20}>
            <p style={{ marginBottom: '2em', fontSize: '1.1em', fontWeight: 'bold' }}>
              The conference will be hosted at{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://www.wayfair.com/about/">
                Wayfair
              </a>'s headquarters,{' '}
              <a target="_blank" rel="noopener noreferrer" href="https://goo.gl/maps/qPNfQbpMpDw">
                4 Copley Place
              </a>, in Boston's beautiful Back Bay neighborhood, walking distance from Copley
              Square, the Charles River, and the Boston Public Gardens.
            </p>
            <Heading title="Travel" level={3} />
            <p style={{ marginBottom: '1em' }}>
              The venue is easily accessible by local public transportation via the Orange Line to
              Back Bay or the Green Line to Copley Station. There are also several MBTA bus routes
              that stop at nearby St. James Avenue at Dartmouth Street or Back Bay Station.
            </p>
            <p style={{ marginBottom: '1em' }}>
              If you are driving, the venue is accessible by several major highways. There are also
              local{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://en.parkopedia.com/parking/locations/126_dartmouth_street_boston_ma_united_states_drt2ysukqwm/?country=us&arriving=201709230800&leaving=201709231900"
              >
                parking options available
              </a>.
            </p>
            <p style={{ marginBottom: '1em' }}>
              If you are arriving from outside the Boston area, there are both air and rail options.
              You can fly into Logan International Airport (BOS), a 30 minute drive or shuttle ride
              from the venue. If traveling by rail you can take Amtrak directly into Back Bay
              Station.
            </p>
            <Heading title="Accommodations" level={3} />
            <p style={{ marginBottom: '1em' }}>
              There are no official conference accommodations, but there are several hotels nearby,
              including:
            </p>
            <ul
              style={{
                listStyle: 'square',
                marginLeft: '2.5em',
                marginBotton: '3em',
                paddingBottom: '1em'
              }}
            >
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.copleysquarehotel.com/"
                >
                  Copley Square Hotel
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.westincopleyplaceboston.com/"
                >
                  Westin Copley Place
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.marriott.com/hotels/travel/bosco-boston-marriott-copley-place/"
                >
                  Boston Marriott Copley Place
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.marriott.com/hotels/maps/travel/bosdt-courtyard-boston-copley-square/"
                >
                  Courtyard Boston Copley Square
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.fairmont.com/copley-plaza-boston/"
                >
                  Fairmont Copley Plaza
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.sheratonbostonhotel.com/"
                >
                  Sheraton Boston
                </a>
              </li>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="http://www.colonnadehotel.com/">
                  Colonnade Hotel
                </a>
              </li>
            </ul>
          </Box>
          <Box width={[1, 1 / 3]}>
            <img alt="Boston" style={{ maxWidth: '100%', height: 'auto' }} src={copley} />
          </Box>
        </Flex>
      </div>
    </PageScrollSection>
    <PageScrollSection id="diversity">
      <div className="Container">
        <Heading title="Diversity" centered />
        <Flex wrap>
          <Box width={[1, 1 / 2, 3 / 5]} pr={20}>
            <p style={{ marginBottom: '1em' }}>
              React Boston believes that diversity is an important part of creating a welcoming,
              inclusive, and innovative tech community. For React Boston 2017, we've allocated a set
              of diversity tickets to be offered at no cost to members of underrepresented groups in
              tech.
            </p>
            <p style={{ marginBottom: '1em' }}>
              We're excited to be working with the{' '}
              <a rel="noopener noreferrer" href="http://foundation.travis-ci.org/">
                Travis Foundation
              </a>{' '}
              to offer several of these through their diversitytickets.org program.{' '}
              <strong style={{ textDecoration: 'underline' }}>
                Applications for diversity tickets are due by August 25, 2017
              </strong>.{' '}
              <a rel="noopener noreferrer" href="https://diversitytickets.org/events/106">
                Apply here
              </a>.
            </p>
            <p style={{ marginBottom: '1em' }}>
              Additional diversity tickets are also being distributed through our partnerships with
              local organizations and events, including:{' '}
              <a rel="noopener noreferrer" href="https://www.shegeeksout.com/">
                She Geeks Out
              </a>,{' '}
              <a rel="noopener noreferrer" href="https://www.meetup.com/Latinos-in-Tech-Boston/">
                Latin@s in Tech Boston
              </a>, and Women in Tech.
            </p>
          </Box>
          <Box width={[1, 1 / 2, 2 / 5]} pl={20}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '2em' }}>
                <Button href={'https://diversitytickets.org/events/106'} openInNewWindow>
                  Apply for a Diversity Ticket
                </Button>
              </div>
              <a rel="noopener noreferrer" href="https://www.shegeeksout.com/">
                <img style={{ width: '65%', margin: '0 auto 1em auto' }} src={sgo} />
              </a>
              <a rel="noopener noreferrer" href="https://www.meetup.com/Latinos-in-Tech-Boston/">
                <img style={{ width: '65%', margin: '0 auto' }} src={latinosintech} />
              </a>
            </div>
          </Box>
        </Flex>
      </div>
    </PageScrollSection>
    <PageScrollSection id="code_of_conduct">
      <div className="Container">
        <Heading title="Code of Conduct" centered />
        <p style={{ marginBottom: '1em' }}>
          {' '}React Boston is dedicated to providing a harassment-free conference experience for
          everyone, regardless of gender, gender identity and expression, age, sexual orientation,
          disability, physical appearance, body size, race, ethnicity, religion (or lack thereof),
          or technology choices. We do not tolerate harassment of conference participants in any
          form. Sexual language and imagery is not appropriate for any conference venue, including
          talks, workshops, parties, Twitter and other online media. Conference participants
          violating these rules may be sanctioned or expelled from the conference without a refund
          at the discretion of the conference organisers.
        </p>
        <p style={{ marginBottom: '1em' }}>
          Participants will be provided with contact information to reach conference staff who will
          be happy help participants contact hotel/venue security or local law enforcement, provide
          escorts, or otherwise assist those experiencing harassment to feel safe for the duration
          of the conference.
        </p>
        <p style={{ marginBottom: '1em' }}>
          <strong style={{ fontWeight: 900 }}>Full Version</strong>:{' '}
          <a target="_blank" rel="noopener noreferrer" href="http://confcodeofconduct.com/">
            Code of Conduct
          </a>
        </p>
      </div>
    </PageScrollSection>

    <Footer />
  </div>;
export { Home };
