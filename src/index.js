import * as React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

const container = document.getElementById('container');

ReactDom.render(<App />, container);

serviceWorker.unregister();
