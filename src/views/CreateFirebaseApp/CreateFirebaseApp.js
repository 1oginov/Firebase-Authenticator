// @flow

import * as React from 'react';

import CreateFirebaseAppForm from '../../components/CreateFirebaseAppForm';

type Props = {
  onSubmit: () => void,
};

const CreateFirebaseApp = ({ onSubmit }: Props) => (
  <React.Fragment>

    <h1>Create Firebase app</h1>

    <CreateFirebaseAppForm onSubmit={onSubmit} />

  </React.Fragment>
);

export default CreateFirebaseApp;
