// @flow

import * as React from 'react';

import FirebaseAppsListItem from '../FirebaseAppsListItem';
import type { FirebaseApp } from '../../lib/FirebaseApp';

type Props = {
  apps: Array<FirebaseApp>,
  onSelect: () => void,
};

const FirebaseAppsList = ({ apps, onSelect }: Props) => (
  <div>
    {apps.map((app, index) => (
      <FirebaseAppsListItem
        app={app}
        key={index} // eslint-disable-line react/no-array-index-key
        onSelect={onSelect}
      />
    ))}
  </div>
);

export default FirebaseAppsList;
