// @flow

import { connect } from 'react-redux';
import { compose, withHandlers, type HOC } from 'recompose';

import { selectFirebaseApp as selectFirebaseAppCreator } from '../../actions';
import withNavigationHandlers from '../../enhancers/withNavigationHandlers';
import * as R from '../../routes';

const mapStateToProps = ({ firebaseApps }) => ({
  apps: Object.keys(firebaseApps).map(key => firebaseApps[key]),
});

const mapDispatchToProps = { selectFirebaseApp: selectFirebaseAppCreator };

const enhancer: HOC<*, {}> = compose(
  withNavigationHandlers({
    handleCreateFirebaseAppClick: R.CREATE_FIREBASE_APP,
    handleFirebaseAppNavigate: R.FIREBASE_APP,
  }),
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({

    onSelect: ({ handleFirebaseAppNavigate, selectFirebaseApp }) => (id) => {
      selectFirebaseApp(id);
      handleFirebaseAppNavigate();
    },

  }),
);

export default enhancer;
