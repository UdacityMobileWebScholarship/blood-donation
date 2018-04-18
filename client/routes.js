/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Page1/Page1');
  require('./modules/Page2/Page2');
}

// react-router setup with code-splitting
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Page1/Page1').default);
        });
      }}
    />
    <Route
      path="/another"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Page2/Page2').default);
        });
      }}
    />
  </Route>
);
