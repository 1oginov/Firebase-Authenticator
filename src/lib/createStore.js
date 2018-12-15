// @flow

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

export default (reducer) => {
  const middleware = [
    thunk,
  ];

  const composeEnhancers = (typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ // eslint-disable-line no-underscore-dangle
    : compose);

  const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
  );

  return createStore(reducer, enhancer);
};
