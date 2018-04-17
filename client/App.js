/**
 * Root Component
 */
import React from 'react';
import { Router, browserHistory } from 'react-router';

// Import Routes
import routes from './routes';

// Base stylesheet
require('./main.css');

export default function App() {
  return (
    <Router history={browserHistory}>
      {routes}
    </Router>
  );
}
