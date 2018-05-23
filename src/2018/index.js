import React, { Fragment } from 'react';
import Hero from './Hero';
import Venue from './Venue';
import Diversity from './Diversity';
import Conduct from './Conduct';
import Sponsors from './Sponsors';
import Speakers from './Speakers';
import NavDrawer from './components/NavDrawer';
import Footer from './Footer';
import { ThemeProvider } from 'styled-components';
import { theme2018 } from '../theme';
import { scroller } from 'react-scroll';
import ReactGA from 'react-ga';
ReactGA.pageview(window.location.pathname + window.location.search);
const scrollToElement = e => {
  const href = e.target.hash.split('#')[1];
  e.preventDefault();
  scroller.scrollTo(href, {
    duration: 750,
    smooth: 'easeInOutQuint'
  });
  ReactGA.event({
    category: 'PageScroll',
    action: 'scrollToElement',
    label: href
  });
};

export default () => (
  <ThemeProvider theme={theme2018}>
    <Fragment>
      <NavDrawer
        items={[
          { name: 'Speakers', href: '#speakers' },
          { name: 'Venue & Travel', href: '#venue-travel' },
          { name: 'Diversity', href: '#diversity' },
          { name: 'Code of Conduct', href: '#conduct' },
          { name: 'Sponsors', href: '#sponsors' }
        ]}
        onLinkClick={scrollToElement}
      />
      <Hero />
      <Speakers id="speakers" />
      <Venue id="venue-travel" />
      <Diversity id="diversity" />
      <Conduct id="conduct" />
      <Sponsors id="sponsors" />
      <Footer />
    </Fragment>
  </ThemeProvider>
);
