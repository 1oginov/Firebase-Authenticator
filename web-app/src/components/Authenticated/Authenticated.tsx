import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

type Props = {
  classes: { [string]: string },
  email: string,
  handleContinueClick: () => void,
  handleSignOutClick: () => void,
  name: string,
  pictureUrl: string,
};

const Authenticated = ({
  classes, email, handleContinueClick, handleSignOutClick, name, pictureUrl,
}: Props) => (
  <Card>

    {pictureUrl && (
      <CardMedia className={classes.media} image={pictureUrl} title="User" />
    )}

    <CardContent>

      <Typography gutterBottom={Boolean(name || email)} variant="h6">Signed in</Typography>

      {name && (
        <Typography>{name}</Typography>
      )}

      {email && (
        <Typography>{email}</Typography>
      )}

    </CardContent>

    <CardActions className={classes.actions}>
      <Button color="secondary" onClick={handleSignOutClick} size="small">Sign out</Button>
      <Button color="primary" onClick={handleContinueClick} size="small">Continue</Button>
    </CardActions>

  </Card>
);

export default Authenticated;
