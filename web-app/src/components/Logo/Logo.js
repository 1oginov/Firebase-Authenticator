// @flow

import Typography from '@material-ui/core/Typography';
import * as React from 'react';

type Props = {
  classes: { [string]: string },
  className: string,
};

const Logo = ({ classes, className }: Props) => (
  <Typography className={[classes.root, className].join(' ')} variant="h4">
    Firebase Authenticator
  </Typography>
);

export default Logo;
