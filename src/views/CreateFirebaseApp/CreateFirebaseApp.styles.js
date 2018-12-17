// @flow

import { withStyles, type Theme } from '@material-ui/core/styles';

import wrapView from '../../style/wrapView';

const styles = (theme: Theme) => ({
  form: {
    width: 512,
  },
  root: wrapView(theme),
});

export default withStyles(styles);
