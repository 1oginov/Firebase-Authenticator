// @flow

import { lifecycle, type HOC } from 'recompose';

const enhancer: HOC<*, {}> = lifecycle({

  componentDidCatch(...args) {
    console.error(...args);
  },

});

export default enhancer;
