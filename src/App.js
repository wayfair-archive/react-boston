import React from 'react';
import theme from './theme';
import globalCSS from './global-styles';
import Home from './Home';
import { ThemeProvider } from 'styled-components';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-101990309-1');

globalCSS();

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;
