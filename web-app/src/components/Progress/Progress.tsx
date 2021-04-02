import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

type Props = {
  classes: { [string]: string },
  text: string,
};

const Progress = ({ classes, text }: Props) => (
  <div className={classes.root}>
    <CircularProgress size={64} />
    <Typography className={classes.text} color="textSecondary" variant="body1">
      {text}
    </Typography>
  </div>
);

export default Progress;
