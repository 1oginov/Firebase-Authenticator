// @flow

import * as React from 'react';

import FirebaseAppsList from '../../components/FirebaseAppsList';
import type { FirebaseApp } from '../../lib/firebaseApp';

type Props = {
  apps: Array<FirebaseApp>,
  handleCreateFirebaseAppClick: () => void,
  onSelect: string => void,
};

const Home = ({ apps, handleCreateFirebaseAppClick, onSelect }: Props) => (
  <React.Fragment>

    <h1>Home</h1>

    <div>
      <button onClick={handleCreateFirebaseAppClick} type="button">Create Firebase app</button>
    </div>

    <FirebaseAppsList apps={apps} onSelect={onSelect} />

  </React.Fragment>
);

export default Home;
