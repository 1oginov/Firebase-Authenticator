// @flow

import { withStyles, type Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  actionItems: {
    flexShrink: 0,
    marginRight: -1.5 * theme.spacing.unit,
  },
  navigationButton: {
    marginLeft: -1.5 * theme.spacing.unit,
    marginRight: 2.5 * theme.spacing.unit,
  },
  title: {
    flexGrow: 1,
  },
});

export default withStyles(styles);
