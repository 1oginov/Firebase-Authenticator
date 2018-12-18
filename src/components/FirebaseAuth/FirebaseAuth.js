// @flow

import firebase from 'firebase/app';
import 'firebase/auth';
import * as React from 'react';
import FirebaseUi from 'react-firebaseui/FirebaseAuth';

type Props = {
  appInstance: Object,
  signInOptions: Array<'email' | 'github' | 'google'>,
};

const FirebaseAuth = ({ appInstance, signInOptions }: Props) => {
  const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
    signInOptions: signInOptions.map((option) => {
      switch (option) {
        case 'email':
          return firebase.auth.EmailAuthProvider.PROVIDER_ID;
        case 'github':
          return firebase.auth.GithubAuthProvider.PROVIDER_ID;
        case 'google':
          return firebase.auth.GoogleAuthProvider.PROVIDER_ID;
        default:
          return undefined;
      }
    }),
  };

  return <FirebaseUi firebaseAuth={appInstance.auth()} uiConfig={uiConfig} />;
};

export default FirebaseAuth;
