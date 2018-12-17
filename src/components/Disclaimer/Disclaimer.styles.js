// @flow

import { withStyles, type Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  link: {
    color: theme.palette.text.secondary,
  },
  root: {
    maxWidth: 48 * theme.spacing.unit,
    textAlign: 'center',
  },
  text: {
    color: theme.palette.text.hint,
  },
});

export default withStyles(styles);
