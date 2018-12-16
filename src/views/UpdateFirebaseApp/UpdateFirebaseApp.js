// @flow

import * as React from 'react';

import FirebaseAppForm from '../../components/FirebaseAppForm';
import type { FirebaseApp } from '../../lib/firebaseApp';

type Props = {
  app: FirebaseApp,
  handleBackClick: () => void,
  onSubmit: FirebaseApp => void,
};

const UpdateFirebaseApp = ({ app, handleBackClick, onSubmit }: Props) => (
  <React.Fragment>

    <h1>Update Firebase app</h1>

    <div>
      <button onClick={handleBackClick} type="button">Back</button>
    </div>

    <FirebaseAppForm buttonTitle="Update" initial={app} onSubmit={onSubmit} />

  </React.Fragment>
);

export default UpdateFirebaseApp;
