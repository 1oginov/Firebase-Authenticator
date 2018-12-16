// @flow

import * as React from 'react';

import * as R from '../../routes';
import CreateFirebaseApp from '../../views/CreateFirebaseApp';
import FirebaseApp from '../../views/FirebaseApp';
import Home from '../../views/Home';
import UpdateFirebaseApp from '../../views/UpdateFirebaseApp';

type Props = {
  route: string,
};

const App = ({ route }: Props) => {
  switch (route) {
    case R.CREATE_FIREBASE_APP:
      return <CreateFirebaseApp />;

    case R.FIREBASE_APP:
      return <FirebaseApp />;

    case R.UPDATE_FIREBASE_APP:
      return <UpdateFirebaseApp />;

    default:
      return <Home />;
  }
};

export default App;
