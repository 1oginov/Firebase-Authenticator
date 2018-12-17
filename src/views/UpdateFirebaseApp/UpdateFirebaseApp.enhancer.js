// @flow

import { connect } from 'react-redux';
import { compose, withHandlers, type HOC } from 'recompose';

import {
  deleteFirebaseApp as deleteFirebaseAppCreator,
  updateFirebaseApp as updateFirebaseAppCreator,
} from '../../actions';
import withNavigationHandlers from '../../enhancers/withNavigationHandlers';
import * as R from '../../routes';

const mapStateToProps = ({ currentFirebaseApp, firebaseApps }) => ({
  app: firebaseApps[currentFirebaseApp],
});

const mapDispatchToProps = {
  deleteFirebaseApp: deleteFirebaseAppCreator,
  updateFirebaseApp: updateFirebaseAppCreator,
};

const enhancer: HOC<*, {}> = compose(
  withNavigationHandlers({
    handleBackClick: R.FIREBASE_APP,
    handleHomeClick: R.HOME,
  }),
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({

    handleDeleteClick: ({ app, deleteFirebaseApp, handleHomeClick }) => () => {
      handleHomeClick();
      deleteFirebaseApp(app.id);
    },

    onSubmit: ({ app, handleBackClick, updateFirebaseApp }) => (updatedApp) => {
      updateFirebaseApp(app.id, updatedApp);
      handleBackClick();
    },

  }),
);

export default enhancer;
