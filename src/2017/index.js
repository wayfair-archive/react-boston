import React, { Fragment } from 'react';
import { scroller } from 'react-scroll';
import ReactGA from 'react-ga';

import Header from '../components/Header';
import Hero from './Hero';
import Intro from './Intro';
import Speakers from './Speakers';
import Schedule from './Schedule';
import Venue from './Venue';
import Diversity from './Diversity';
import Conduct from './Conduct';
import Sponsors from './Sponsors';

import Footer from '../components/Footer';

import { speakerList } from '../speaker-data-2017';
import { talks } from '../talks-2017';

const scrollToElement = e => {
  const href = e.target.hash.split('#')[1];
  e.preventDefault();
  scroller.scrollTo(href, {
    duration: 750,
    offset: -75,
    smooth: 'easeInOutQuint'
  });
  ReactGA.event({
    category: 'PageScroll',
    action: 'scrollToElement',
    label: href
  });
};

export default () => (
  <Fragment>
    <Header
      items={[
        { name: 'Speakers', href: '#speakers' },
        { name: 'Schedule', href: '#schedule' },
        { name: 'Venue', href: '#venue' }
      ]}
      onClick={scrollToElement}
    />
    <Hero />
    <Intro />
    <Speakers speakerList={speakerList} id="speakers" />
    <Schedule talks={talks} id="schedule" />
    <Venue id="venue" />
    <Diversity />
    <Conduct />
    <Sponsors />
    <Footer />
  </Fragment>
);
