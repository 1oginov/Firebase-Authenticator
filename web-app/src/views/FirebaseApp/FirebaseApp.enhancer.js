import { connect } from 'react-redux';
import { compose, withHandlers, type HOC } from 'recompose';

import withNavigationHandlers from '../../enhancers/withNavigationHandlers';
import { createShareLink } from '../../lib/firebaseApp';
import * as R from '../../routes';

const mapStateToProps = ({ currentFirebaseApp, firebaseApps }) => ({
  app: firebaseApps[currentFirebaseApp],
});

const enhancer: HOC<*, {}> = compose(
  withNavigationHandlers({
    handleBackClick: R.HOME,
    handleUpdateClick: R.UPDATE_FIREBASE_APP,
  }),
  connect(mapStateToProps),
  withHandlers({

    handleShareClick: ({ app }) => () => {
      prompt('Share this link:', createShareLink(app));
    },

  }),
);

export default enhancer;
