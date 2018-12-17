// @flow

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import Bar from '../../components/Bar';
import FirebaseAppForm from '../../components/FirebaseAppForm';
import type { FirebaseApp } from '../../lib/firebaseApp';

type Props = {
  app: FirebaseApp,
  classes: { [string]: string },
  handleBackClick: () => void,
  handleDeleteClick: () => void,
  onSubmit: FirebaseApp => void,
};

const UpdateFirebaseApp = ({
  app, classes, handleBackClick, handleDeleteClick, onSubmit,
}: Props) => (
  <React.Fragment>

    <Bar navigationClick={handleBackClick} title="Update Firebase app" />

    <div className={classes.root}>

      <FirebaseAppForm
        className={classes.form}
        buttonTitle="Update"
        initial={app}
        onSubmit={onSubmit}
      />

      <div>
        <Divider className={classes.deleteDivider} />
        <div className={classes.deleteContainer}>
          <Button
            className={classes.deleteButton}
            onClick={handleDeleteClick}
            variant="outlined"
          >
            Delete
          </Button>
          <Typography>This action cannot be undone!</Typography>
        </div>
      </div>

    </div>

  </React.Fragment>
);

export default UpdateFirebaseApp;
