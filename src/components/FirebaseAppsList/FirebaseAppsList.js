// @flow

import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import * as React from 'react';

import FirebaseAppsListItem from '../FirebaseAppsListItem';
import type { FirebaseApp } from '../../lib/firebaseApp';

type Props = {
  apps: Array<FirebaseApp>,
  classes: { [string]: string },
  className: string,
  onSelect: string => void,
};

const FirebaseAppsList = ({
  apps, classes, className, onSelect,
}: Props) => {
  if (apps.length === 0) {
    return null;
  }

  return (
    <Paper className={[classes.paper, className].join(' ')}>
      <List>
        {apps.map((app, index) => (
          <FirebaseAppsListItem
            app={app}
            key={index} // eslint-disable-line react/no-array-index-key
            onSelect={onSelect}
          />
        ))}
      </List>
    </Paper>
  );
};

export default FirebaseAppsList;
