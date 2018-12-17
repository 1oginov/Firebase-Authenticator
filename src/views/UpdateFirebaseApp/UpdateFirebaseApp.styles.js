// @flow

import { withStyles, type Theme } from '@material-ui/core/styles';

import wrapView from '../../style/wrapView';

const styles = (theme: Theme) => ({
  deleteButton: {
    color: theme.palette.error.main,
    marginRight: 2 * theme.spacing.unit,
  },
  deleteContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  deleteDivider: {
    marginBottom: 2 * theme.spacing.unit,
    marginTop: 3 * theme.spacing.unit,
  },
  form: {
    width: 512,
  },
  root: wrapView(theme),
});

export default withStyles(styles);
