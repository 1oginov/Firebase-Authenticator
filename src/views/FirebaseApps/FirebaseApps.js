// @flow

import * as React from 'react';

import FirebaseAppsList from '../../components/FirebaseAppsList';
import type { FirebaseApp } from '../../lib/FirebaseApp';

type Props = {
  apps: Array<FirebaseApp>,
  handleCreateAppClick: () => void,
  onSelect: string => void,
};

const FirebaseApps = ({ apps, handleCreateAppClick, onSelect }: Props) => (
  <React.Fragment>

    <h1>Firebase apps</h1>

    <div>
      <button onClick={handleCreateAppClick} type="button">Create</button>
    </div>

    <FirebaseAppsList apps={apps} onSelect={onSelect} />

  </React.Fragment>
);

export default FirebaseApps;
