import {
  applyMiddleware, compose, createStore, type Reducer, type Store as ReduxStore,
} from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

import type { Action } from '../actions';
import { persistedPaths, type State } from '../reducer';

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
    persistState(persistedPaths),
  );

  return createStore(reducer, enhancer);
};
