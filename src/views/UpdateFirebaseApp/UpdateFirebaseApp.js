// @flow

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
      <FirebaseAppForm buttonTitle="Update" initial={app} onSubmit={onSubmit} />
    </div>

    <div>
      <button onClick={handleDeleteClick} type="button">Delete</button>
    </div>

  </React.Fragment>
);

export default UpdateFirebaseApp;
