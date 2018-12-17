// @flow

import { withStyles, type Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  buttonContainer: {
    textAlign: 'center',
  },
  buttonIcon: {
    marginRight: theme.spacing.unit,
  },
  paper: {
    marginBottom: 3 * theme.spacing.unit,
    padding: 3 * theme.spacing.unit,
    paddingBottom: 2 * theme.spacing.unit,
    paddingTop: 2 * theme.spacing.unit,
  },
  root: {
    maxWidth: '100%',
  },
});

export default withStyles(styles);
