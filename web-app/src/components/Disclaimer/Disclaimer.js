// @flow

import Typography from '@material-ui/core/Typography/Typography';
import * as React from 'react';

type Props = {
  classes: { [string]: string },
};

const Disclaimer = ({ classes }: Props) => (
  <Typography className={classes.root}>
    Configured apps persisted only in this browser and nowhere else. The project is open source and
    available at
    {' '}
    <a
      className={classes.link}
      href="https://github.com/1oginov/Firebase-Authenticator"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  </Typography>
);

export default Disclaimer;
