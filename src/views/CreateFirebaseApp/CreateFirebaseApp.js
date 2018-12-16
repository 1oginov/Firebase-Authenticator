// @flow

import * as React from 'react';

import CreateFirebaseAppForm from '../../components/CreateFirebaseAppForm';
import type { FirebaseApp } from '../../lib/firebaseApp';

type Props = {
  handleBackClick: () => void,
  onSubmit: FirebaseApp => void,
};

const CreateFirebaseApp = ({ handleBackClick, onSubmit }: Props) => (
  <React.Fragment>

    <h1>Create Firebase app</h1>

    <div>
      <button onClick={handleBackClick} type="button">Back</button>
    </div>

    <CreateFirebaseAppForm onSubmit={onSubmit} />

  </React.Fragment>
);

export default CreateFirebaseApp;
