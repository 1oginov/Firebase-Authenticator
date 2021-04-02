import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import * as React from 'react';

import Disclaimer from '../../components/Disclaimer';
import FirebaseAppsList from '../../components/FirebaseAppsList';
import Logo from '../../components/Logo';
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

    <Logo className={classes.logo} />

    <FirebaseAppsList apps={apps} className={classes.firebaseAppsList} onSelect={onSelect} />

    <div className={classes.fabContainer}>
      <Fab color="secondary" onClick={handleCreateFirebaseAppClick} variant="extended">
        <AddIcon className={classes.fabIcon} />
        Create Firebase app
      </Fab>
    </div>

    <Disclaimer />

  </div>
);

export default Home;
