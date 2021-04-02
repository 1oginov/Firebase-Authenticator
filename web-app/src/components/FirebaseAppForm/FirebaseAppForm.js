// @flow

import Fab from '@material-ui/core/Fab';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

type Props = {
  apiKey: string,
  authDomain: string,
  buttonIcon: (string) => React.Node,
  buttonTitle: string,
  classes: { [string]: string },
  className: string,
  databaseUrl: string,
  handleInputChange: () => void,
  handleSubmit: () => void,
  messagingSenderId: string,
  projectId: string,
  redirectRefreshTokenPlaceholder: string,
  redirectUrl: string,
  signInOptionEmail: boolean,
  signInOptionGithub: boolean,
  signInOptionGoogle: boolean,
  storageBucket: string,
  title: string,
};

const FirebaseAppForm = ({
  apiKey, authDomain, buttonIcon, buttonTitle, classes, className, databaseUrl, handleInputChange,
  handleSubmit, messagingSenderId, projectId, redirectRefreshTokenPlaceholder, redirectUrl,
  signInOptionEmail, signInOptionGithub, signInOptionGoogle, storageBucket, title,
}: Props) => (
  <form className={[classes.root, className].join(' ')} onSubmit={handleSubmit}>

    <Paper className={classes.paper}>
      <TextField
        fullWidth
        label="Title"
        margin="normal"
        name="title"
        onChange={handleInputChange}
        value={title}
        variant="outlined"
      />
    </Paper>

    <Paper className={classes.paper}>

      <Typography variant="h6">
        Redirect
      </Typography>

      <TextField
        fullWidth
        label="URL"
        margin="normal"
        name="redirectUrl"
        onChange={handleInputChange}
        value={redirectUrl}
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Refresh token placeholder"
        margin="normal"
        name="redirectRefreshTokenPlaceholder"
        onChange={handleInputChange}
        value={redirectRefreshTokenPlaceholder}
        variant="outlined"
      />

    </Paper>

    <Paper className={classes.paper}>

      <Typography variant="h6">
        Firebase: configuration
      </Typography>

      <TextField
        fullWidth
        label="API key"
        margin="normal"
        name="apiKey"
        onChange={handleInputChange}
        value={apiKey}
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Auth domain"
        margin="normal"
        name="authDomain"
        onChange={handleInputChange}
        value={authDomain}
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Database URL"
        margin="normal"
        name="databaseUrl"
        onChange={handleInputChange}
        value={databaseUrl}
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Messaging sender ID"
        margin="normal"
        name="messagingSenderId"
        onChange={handleInputChange}
        value={messagingSenderId}
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Project ID"
        margin="normal"
        name="projectId"
        onChange={handleInputChange}
        value={projectId}
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Storage bucket"
        margin="normal"
        name="storageBucket"
        onChange={handleInputChange}
        value={storageBucket}
        variant="outlined"
      />

    </Paper>

    <Paper className={classes.paper}>

      <Typography variant="h6">
        Firebase: sign in options
      </Typography>

      <FormGroup>

        <FormControlLabel
          control={(
            <Switch
              checked={signInOptionEmail}
              name="signInOptionEmail"
              onChange={handleInputChange}
            />
          )}
          label="Email"
        />

        <FormControlLabel
          control={(
            <Switch
              checked={signInOptionGithub}
              name="signInOptionGithub"
              onChange={handleInputChange}
            />
          )}
          label="GitHub"
        />

        <FormControlLabel
          control={(
            <Switch
              checked={signInOptionGoogle}
              name="signInOptionGoogle"
              onChange={handleInputChange}
            />
          )}
          label="Google"
        />

      </FormGroup>

    </Paper>

    <div className={classes.buttonContainer}>
      <Fab color="primary" type="submit" variant="extended">
        {buttonIcon(classes.buttonIcon)}
        {buttonTitle}
      </Fab>
    </div>

  </form>
);

export default FirebaseAppForm;
