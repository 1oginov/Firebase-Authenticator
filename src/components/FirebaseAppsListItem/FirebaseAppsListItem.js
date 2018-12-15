// @flow

import * as React from 'react';

import type { FirebaseApp } from '../../lib/FirebaseApp';

type Props = {
  app: FirebaseApp,
  onSelect: () => void,
};

const FirebaseAppsListItem = ({ app, onSelect }: Props) => (
  <div>
    {app.title}
    <button onClick={() => onSelect(app.id)} type="button">Select</button>
  </div>
);

export default FirebaseAppsListItem;
