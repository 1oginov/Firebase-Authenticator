// @flow

import * as React from 'react';

import type { FirebaseApp } from '../../lib/firebaseApp';

type Props = {
  app: FirebaseApp,
  onSelect: string => void,
};

const FirebaseAppsListItem = ({ app, onSelect }: Props) => (
  <div>
    {app.title}
    <button onClick={() => onSelect(app.id)} type="button">Select</button>
  </div>
);

export default FirebaseAppsListItem;
