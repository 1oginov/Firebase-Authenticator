// @flow

import * as React from 'react';

import * as R from '../../routes';
import CreateFirebaseApp from '../../views/CreateFirebaseApp';
import FirebaseApps from '../../views/FirebaseApps';

type Props = {
  route: string,
};

const App = ({ route }: Props) => {
  switch (route) {
    case R.CREATE_FIREBASE_APP:
      return <CreateFirebaseApp />;

    default:
      return <FirebaseApps />;
  }
};

export default App;
