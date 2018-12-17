// @flow

import type { Theme } from '@material-ui/core/styles';

export default (theme: Theme) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 3 * theme.spacing.unit,
});
