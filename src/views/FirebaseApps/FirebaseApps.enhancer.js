// @flow

import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import { selectFirebaseApp as dispatchSelectFirebaseApp } from '../../actions';

const mapStateToProps = ({ firebaseApps }) => ({
  apps: Object.keys(firebaseApps).map(key => firebaseApps[key]),
});

const mapDispatchToProps = { selectFirebaseApp: dispatchSelectFirebaseApp };

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({

    onSelect: ({ selectFirebaseApp }) => (id) => {
      selectFirebaseApp(id);
    },

  }),
);
