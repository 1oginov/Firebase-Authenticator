// @flow

import { withStyles, type Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  link: {
    color: theme.palette.text.secondary,
  },
  root: {
    color: theme.palette.text.hint,
    maxWidth: 52 * theme.spacing.unit,
    textAlign: 'center',
  },
});

export default withStyles(styles);
