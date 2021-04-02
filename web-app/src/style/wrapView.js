// @flow

import type { Theme } from '@material-ui/core/styles';

export default (theme: Theme) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'center',
  padding: theme.spacing(3),
});
