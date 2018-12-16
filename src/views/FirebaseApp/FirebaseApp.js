// @flow

import * as React from 'react';

import type { FirebaseApp as FirebaseAppType } from '../../lib/firebaseApp';

type Props = {
  app: FirebaseAppType,
  handleBackClick: () => void,
  handleDeleteClick: () => void,
  handleShareClick: () => void,
};

const FirebaseApp = ({
  app, handleBackClick, handleDeleteClick, handleShareClick,
}: Props) => (
  <React.Fragment>

    <h1>Firebase app</h1>

    <div>
      <button onClick={handleBackClick} type="button">Back</button>
      <button onClick={handleShareClick} type="button">Share</button>
      <button onClick={handleDeleteClick} type="button">Delete</button>
    </div>

    <div>
      {JSON.stringify(app)}
    </div>

  </React.Fragment>
);

export default FirebaseApp;
