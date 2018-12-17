// @flow

import { withStyles, type Theme } from '@material-ui/core/styles';

import wrapView from '../../style/wrapView';

const styles = (theme: Theme) => ({
  fabContainer: {
    textAlign: 'center',
  },
  fabIcon: {
    marginRight: theme.spacing.unit,
  },
  firebaseAppsList: {
    marginBottom: 3 * theme.spacing.unit,
  },
  root: wrapView(theme),
});

export default withStyles(styles);
