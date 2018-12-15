// @flow

import { connect } from 'react-redux';
import { compose, withHandlers, type HOC } from 'recompose';

import { selectFirebaseApp as dispatchSelectFirebaseApp } from '../../actions';
import withNavigationHandlers from '../../enhancers/withNavigationHandlers';
import * as R from '../../routes';

const mapStateToProps = ({ firebaseApps }) => ({
  apps: Object.keys(firebaseApps).map(key => firebaseApps[key]),
});

const mapDispatchToProps = { selectFirebaseApp: dispatchSelectFirebaseApp };

const enhancer: HOC<*, {}> = compose(
  withNavigationHandlers({
    handleCreateAppClick: R.CREATE_FIREBASE_APP,
  }),
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({

    onSelect: ({ selectFirebaseApp }) => (id) => {
      selectFirebaseApp(id);
    },

  }),
);

export default enhancer;
