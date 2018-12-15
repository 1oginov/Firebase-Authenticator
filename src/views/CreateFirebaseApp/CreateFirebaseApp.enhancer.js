// @flow

import { connect } from 'react-redux';
import { compose, withHandlers, type HOC } from 'recompose';

import { createFirebaseApp as createFirebaseAppCreator } from '../../actions';
import withNavigationHandlers from '../../enhancers/withNavigationHandlers';
import * as R from '../../routes';

const mapDispatchToProps = { createFirebaseApp: createFirebaseAppCreator };

const enhancer: HOC<*, {}> = compose(
  withNavigationHandlers({
    handleBackClick: R.HOME,
  }),
  connect(null, mapDispatchToProps),
  withHandlers({

    onSubmit: ({ createFirebaseApp }) => (app) => {
      createFirebaseApp(app);
    },

  }),
);

export default enhancer;
