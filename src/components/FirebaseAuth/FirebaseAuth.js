// @flow

import firebase from 'firebase';
import * as React from 'react';
import FirebaseUi from 'react-firebaseui/FirebaseAuth';

type Props = {
  firebaseApp: Object,
};

const FirebaseAuth = ({ firebaseApp }: Props) => {
  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
    signInOptions: [
      // TODO: Make this options configurable in the FirebaseApp objects.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  return <FirebaseUi firebaseAuth={firebaseApp.auth()} uiConfig={uiConfig} />;
};

export default FirebaseAuth;
