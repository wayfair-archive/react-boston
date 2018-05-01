import React, { Fragment } from 'react';
import { scroller } from 'react-scroll';
import ReactGA from 'react-ga';

import Hero from './Hero';
import Intro from './Intro';
import Venue from './Venue';
import Diversity from './Diversity';
import Conduct from './Conduct';
import Sponsors from './Sponsors';

import Footer from '../components/Footer';

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
    <Hero />
    <Intro />
    <Venue id="venue" />
    <Diversity />
    <Conduct />
    <Sponsors />
    <Footer />
  </Fragment>
);
