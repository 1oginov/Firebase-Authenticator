// @flow

import { connect } from 'react-redux';
import { compose, withHandlers, type HOC } from 'recompose';

import { updateFirebaseApp as updateFirebaseAppCreator } from '../../actions';
import withNavigationHandlers from '../../enhancers/withNavigationHandlers';
import * as R from '../../routes';

const mapStateToProps = ({ currentFirebaseApp, firebaseApps }) => ({
  app: firebaseApps[currentFirebaseApp],
});

const mapDispatchToProps = { updateFirebaseApp: updateFirebaseAppCreator };

const enhancer: HOC<*, {}> = compose(
  withNavigationHandlers({
    handleBackClick: R.FIREBASE_APP,
  }),
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({

    onSubmit: ({ app, handleBackClick, updateFirebaseApp }) => (updatedApp) => {
      updateFirebaseApp(app.id, updatedApp);
      handleBackClick();
    },

  }),
);

export default enhancer;
