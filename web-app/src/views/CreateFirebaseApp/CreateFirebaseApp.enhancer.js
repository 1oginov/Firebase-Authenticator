// @flow

import { connect } from 'react-redux';
import { compose, withHandlers, type HOC } from 'recompose';

import {
  createFirebaseApp as createFirebaseAppCreator,
  selectFirebaseApp as selectFirebaseAppCreator,
} from '../../actions';
import withNavigationHandlers from '../../enhancers/withNavigationHandlers';
import * as R from '../../routes';

const mapDispatchToProps = {
  createFirebaseApp: createFirebaseAppCreator,
  selectFirebaseApp: selectFirebaseAppCreator,
};

const enhancer: HOC<*, {}> = compose(
  withNavigationHandlers({
    handleBackClick: R.HOME,
    handleFirebaseAppNavigate: R.FIREBASE_APP,
  }),
  connect(null, mapDispatchToProps),
  withHandlers({

    onSubmit: ({ createFirebaseApp, handleFirebaseAppNavigate, selectFirebaseApp }) => (app) => {
      createFirebaseApp(app);
      selectFirebaseApp(app.id);
      handleFirebaseAppNavigate();
    },

  }),
);

export default enhancer;
