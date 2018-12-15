// @flow

import * as React from 'react';

import FirebaseAppsList from '../../components/FirebaseAppsList';
import type { FirebaseApp } from '../../lib/FirebaseApp';

type Props = {
  apps: Array<FirebaseApp>,
  onSelect: () => void,
};

const FirebaseApps = ({ apps, onSelect }: Props) => (
  <React.Fragment>

    <h1>Firebase app</h1>

    <FirebaseAppsList apps={apps} onSelect={onSelect} />

  </React.Fragment>
);

export default FirebaseApps;
