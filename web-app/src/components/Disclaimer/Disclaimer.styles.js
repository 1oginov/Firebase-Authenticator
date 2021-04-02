import { withStyles, type Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => ({
  link: {
    color: theme.palette.text.secondary,
  },
  root: {
    color: theme.palette.text.hint,
    maxWidth: theme.spacing(52),
    textAlign: 'center',
  },
});

export default withStyles(styles);
