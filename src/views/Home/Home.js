// @flow

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import * as React from 'react';

import FirebaseAppsList from '../../components/FirebaseAppsList';
import type { FirebaseApp } from '../../lib/firebaseApp';

type Props = {
  apps: Array<FirebaseApp>,
  classes: { [string]: string },
  handleCreateFirebaseAppClick: () => void,
  onSelect: string => void,
};

const Home = ({
  apps, classes, handleCreateFirebaseAppClick, onSelect,
}: Props) => (
  <div className={classes.root}>

    <FirebaseAppsList apps={apps} className={classes.firebaseAppsList} onSelect={onSelect} />

    <div className={classes.fabContainer}>
      <Fab onClick={handleCreateFirebaseAppClick} variant="extended">
        <AddIcon className={classes.fabIcon} />
        Create Firebase app
      </Fab>
    </div>

  </div>
);

export default Home;
