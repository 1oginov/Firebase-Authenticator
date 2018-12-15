// @flow

import { connect } from 'react-redux';
import { compose, withHandlers, type HOC } from 'recompose';

import { selectFirebaseApp as dispatchSelectFirebaseApp } from '../../actions';

const mapStateToProps = ({ firebaseApps }) => ({
  apps: Object.keys(firebaseApps).map(key => firebaseApps[key]),
});

const mapDispatchToProps = { selectFirebaseApp: dispatchSelectFirebaseApp };

const enhancer: HOC<*, {}> = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({

    onSelect: ({ selectFirebaseApp }) => (id) => {
      selectFirebaseApp(id);
    },

  }),
);

export default enhancer;
