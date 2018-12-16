// @flow

import { connect } from 'react-redux';
import { compose, lifecycle, type HOC } from 'recompose';

import {
  createFirebaseApp as createFirebaseAppCreator,
  navigate as navigateCreator,
  selectFirebaseApp as selectFirebaseAppCreator,
} from '../../actions';
import * as R from '../../routes';
import { parseShareLink } from '../../lib/firebaseApp';

const mapStateToProps = ({ currentFirebaseApp, firebaseApps, route }) => ({
  currentFirebaseApp, firebaseApps, route,
});

const mapDispatchToProps = {
  createFirebaseApp: createFirebaseAppCreator,
  navigate: navigateCreator,
  selectFirebaseApp: selectFirebaseAppCreator,
};

const enhancer: HOC<*, {}> = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({

    componentDidMount() {
      const {
        createFirebaseApp, currentFirebaseApp, firebaseApps, navigate, selectFirebaseApp,
      } = this.props;

      const sharedFirebaseApp = parseShareLink(window.location.href);

      if (sharedFirebaseApp && !firebaseApps[sharedFirebaseApp.id]) {
        createFirebaseApp(sharedFirebaseApp);
        selectFirebaseApp(sharedFirebaseApp.id);
        navigate(R.FIREBASE_APP);
      } else if (currentFirebaseApp && firebaseApps[currentFirebaseApp]) {
        navigate(R.FIREBASE_APP);
      }
    },

  }),
);

export default enhancer;
