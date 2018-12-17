// @flow

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, type Theme } from '@material-ui/core/styles';
import * as React from 'react';

import * as R from '../../routes';
import CreateFirebaseApp from '../../views/CreateFirebaseApp';
import FirebaseApp from '../../views/FirebaseApp';
import Home from '../../views/Home';
import UpdateFirebaseApp from '../../views/UpdateFirebaseApp';

type Props = {
  route: string,
  theme: Theme,
};

const App = ({ route, theme }: Props) => {
  let component;

  switch (route) {
    case R.CREATE_FIREBASE_APP:
      component = <CreateFirebaseApp />;
      break;

    case R.FIREBASE_APP:
      component = <FirebaseApp />;
      break;

    case R.UPDATE_FIREBASE_APP:
      component = <UpdateFirebaseApp />;
      break;

    default:
      component = <Home />;
      break;
  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {component}
    </MuiThemeProvider>
  );
};

export default App;
