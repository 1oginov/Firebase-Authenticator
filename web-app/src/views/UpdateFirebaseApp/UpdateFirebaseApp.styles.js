import { withStyles, type Theme } from '@material-ui/core/styles';

import wrapView from '../../style/wrapView';

const styles = (theme: Theme) => ({
  deleteButton: {
    color: theme.palette.error.main,
    marginRight: theme.spacing(2),
  },
  deleteContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  deleteDivider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  form: {
    width: 512,
  },
  root: wrapView(theme),
});

export default withStyles(styles);
