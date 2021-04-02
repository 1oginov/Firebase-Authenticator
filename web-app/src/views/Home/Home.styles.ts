import { withStyles, type Theme } from '@material-ui/core/styles';

import wrapView from '../../style/wrapView';

const styles = (theme: Theme) => ({
  fabContainer: {
    marginBottom: theme.spacing(3),
    textAlign: 'center',
  },
  fabIcon: {
    marginRight: theme.spacing(),
  },
  firebaseAppsList: {
    marginBottom: theme.spacing(3),
  },
  logo: {
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(2),
  },
  root: wrapView(theme),
});

export default withStyles(styles);
