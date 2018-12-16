// @flow

import { connect } from 'react-redux';
import { compose, lifecycle, type HOC } from 'recompose';

import { navigate as navigateCreator } from '../../actions';
import * as R from '../../routes';

const mapStateToProps = ({ currentFirebaseApp, route }) => ({ currentFirebaseApp, route });

const mapDispatchToProps = { navigate: navigateCreator };

const enhancer: HOC<*, {}> = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({

    componentDidMount() {
      const { currentFirebaseApp, navigate } = this.props;

      if (currentFirebaseApp) {
        navigate(R.FIREBASE_APP);
      }
    },

  }),
);

export default enhancer;
