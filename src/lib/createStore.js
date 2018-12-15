// @flow

import {
  applyMiddleware, compose, createStore, type Reducer, type Store as ReduxStore,
} from 'redux';
import thunk from 'redux-thunk';

import type { Action } from '../actions';
import type { State } from '../reducer';

export type Store = ReduxStore<State, Action>;

export default (reducer: Reducer<State, Action>): Store => {
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
