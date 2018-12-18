// @flow

import { withStyles, type Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    marginTop: 3 * theme.spacing.unit,
    textAlign: 'center',
  },
});

export default withStyles(styles);
