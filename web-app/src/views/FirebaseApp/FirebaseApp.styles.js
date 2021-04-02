// @flow

import { withStyles, type Theme } from '@material-ui/core/styles';

import wrapView from '../../style/wrapView';

const styles = (theme: Theme) => ({
  authContainer: {
    marginBottom: theme.spacing(3),
  },
  info: {
    marginBottom: theme.spacing(3),
    textAlign: 'center',
  },
  root: wrapView(theme),
});

export default withStyles(styles);
