// @flow

import * as React from 'react';

import CreateFirebaseAppForm from '../../components/CreateFirebaseAppForm';
import type { FirebaseApp } from '../../lib/FirebaseApp';

type Props = {
  onSubmit: FirebaseApp => void,
};

const CreateFirebaseApp = ({ onSubmit }: Props) => (
  <React.Fragment>

    <h1>Create Firebase app</h1>

    <CreateFirebaseAppForm onSubmit={onSubmit} />

  </React.Fragment>
);

export default CreateFirebaseApp;
