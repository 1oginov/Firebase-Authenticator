import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import SaveIcon from '@material-ui/icons/Save';
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
  <>

    <Bar navigationClick={handleBackClick} title="Update Firebase app" />

    <div className={classes.root}>

      <FirebaseAppForm
        className={classes.form}
        buttonIcon={(iconClass) => <SaveIcon className={iconClass} />}
        buttonTitle="Save changes"
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

  </>
);

export default UpdateFirebaseApp;
