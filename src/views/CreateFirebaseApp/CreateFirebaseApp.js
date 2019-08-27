// @flow

import AddIcon from '@material-ui/icons/Add';
import * as React from 'react';

import Bar from '../../components/Bar';
import FirebaseAppForm from '../../components/FirebaseAppForm';
import type { FirebaseApp } from '../../lib/firebaseApp';

type Props = {
  classes: { [string]: string },
  handleBackClick: () => void,
  onSubmit: FirebaseApp => void,
};

const CreateFirebaseApp = ({ classes, handleBackClick, onSubmit }: Props) => (
  <>

    <Bar navigationClick={handleBackClick} title="Create Firebase app" />

    <div className={classes.root}>
      <FirebaseAppForm
        className={classes.form}
        buttonIcon={(iconClass) => <AddIcon className={iconClass} />}
        buttonTitle="Create app"
        onSubmit={onSubmit}
      />
    </div>

  </>
);

export default CreateFirebaseApp;
