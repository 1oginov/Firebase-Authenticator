// @flow

import { withStyles, type Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    marginTop: theme.spacing(3),
    textAlign: 'center',
  },
});

export default withStyles(styles);
