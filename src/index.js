// @flow

import * as React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import 'typeface-roboto';

import App from './containers/App';
import createStore from './lib/createStore';
import reducer from './reducer';
import * as serviceWorker from './serviceWorker';
import './style/index.css';

const container = document.getElementById('container');
const store = createStore(reducer);

if (!container) {
  throw new Error('Container is missing');
}

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container,
);

serviceWorker.unregister();
