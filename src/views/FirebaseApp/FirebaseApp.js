// @flow

import * as React from 'react';

import type { FirebaseApp as FirebaseAppType } from '../../lib/FirebaseApp';

type Props = {
  app: FirebaseAppType,
  handleBackClick: () => void,
  handleDeleteClick: () => void,
};

const FirebaseApp = ({ app, handleBackClick, handleDeleteClick }: Props) => (
  <React.Fragment>

    <h1>Firebase app</h1>

    <div>
      <button onClick={handleBackClick} type="button">Back</button>
      <button onClick={handleDeleteClick} type="button">Delete</button>
    </div>

    <div>
      {JSON.stringify(app)}
    </div>

  </React.Fragment>
);

export default FirebaseApp;
