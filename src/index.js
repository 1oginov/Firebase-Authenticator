// @flow

import * as React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('container');

if (!container) {
  throw new Error('Container is missing');
}

ReactDom.render(<App />, container);

serviceWorker.unregister();
