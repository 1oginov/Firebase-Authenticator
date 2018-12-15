import firebase from 'firebase';
import * as React from 'react';
import FirebaseUi from 'react-firebaseui/FirebaseAuth';

export default class Guest extends React.Component {
  uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  render() {
    return (
      <FirebaseUi firebaseAuth={firebase.auth()} uiConfig={this.uiConfig} />
    );
  }
}
