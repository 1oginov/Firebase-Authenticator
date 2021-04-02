import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as React from 'react';

import type { FirebaseApp } from '../../lib/firebaseApp';

type Props = {
  app: FirebaseApp,
  onSelect: string => void,
};

const FirebaseAppsListItem = ({ app, onSelect }: Props) => (
  <ListItem button onClick={() => onSelect(app.id)}>
    <ListItemText
      primary={app.title ? app.title : app.id}
      primaryTypographyProps={{ noWrap: true }}
    />
  </ListItem>
);

export default FirebaseAppsListItem;
