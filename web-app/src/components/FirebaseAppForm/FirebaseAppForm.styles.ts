import { withStyles, type Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  buttonContainer: {
    textAlign: 'center',
  },
  buttonIcon: {
    marginRight: theme.spacing(),
  },
  paper: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
  },
  root: {
    maxWidth: '100%',
  },
});

export default withStyles(styles);
