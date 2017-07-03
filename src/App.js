import React from 'react'
import './css/style.css';

import ReactGA from 'react-ga';

import { Home } from './Home';

ReactGA.initialize('UA-101990309-1');

const App = () => (
  <Home />
)

export default App;
