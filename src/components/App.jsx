import firebase from 'firebase';
import * as React from 'react';

import * as C from '../constants';

export default class App extends React.Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: C.FIREBASE_API_KEY,
      authDomain: C.FIREBASE_AUTH_DOMAIN,
      databaseURL: C.FIREBASE_DATABASE_URL,
      messagingSenderId: C.FIREBASE_MESSAGING_SENDER_ID,
      projectId: C.FIREBASE_PROJECT_ID,
      storageBucket: C.FIREBASE_STORAGE_BUCKET,
    });
  }

  render() {
    return <div>Hello, world!</div>;
  }
}
