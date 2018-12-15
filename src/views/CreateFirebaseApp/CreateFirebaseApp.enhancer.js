// @flow

import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import { createFirebaseApp as dispatchCreateFirebaseApp } from '../../actions';

const mapDispatchToProps = { createFirebaseApp: dispatchCreateFirebaseApp };

export default compose(
  connect(null, mapDispatchToProps),
  withHandlers({

    onSubmit: ({ createFirebaseApp }) => (app) => {
      createFirebaseApp(app);
    },

  }),
);
