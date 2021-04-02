// @flow

import { withStyles, type Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  actionItems: {
    flexShrink: 0,
    marginRight: theme.spacing(-1.5),
  },
  navigationButton: {
    marginLeft: theme.spacing(-1.5),
    marginRight: theme.spacing(2.5),
  },
  title: {
    flexGrow: 1,
  },
});

export default withStyles(styles);
