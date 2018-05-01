import React from 'react';
import theme from './theme';
import globalCSS from './global-styles';
import twentyEighteen from './2018';
import twentySeventeen from './2017';
import { ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => (
  <Router>
    <div>
      <Route exact path="/" component={twentyEighteen} />
      <Route path="/2017" component={twentySeventeen} />
    </div>
  </Router>
);

ReactGA.initialize('UA-101990309-1');

globalCSS();

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;
