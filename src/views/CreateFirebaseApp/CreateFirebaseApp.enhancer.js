// @flow

import { connect } from 'react-redux';
import { compose, withHandlers, type HOC } from 'recompose';

import { createFirebaseApp as dispatchCreateFirebaseApp } from '../../actions';

const mapDispatchToProps = { createFirebaseApp: dispatchCreateFirebaseApp };

const enhancer: HOC<*, {}> = compose(
  connect(null, mapDispatchToProps),
  withHandlers({

    onSubmit: ({ createFirebaseApp }) => (app) => {
      createFirebaseApp(app);
    },

  }),
);

export default enhancer;
