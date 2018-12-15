import firebase from 'firebase';
import * as React from 'react';

import * as C from 'Constants';
import Authenticated from 'Views/Authenticated';
import Guest from 'Views/Guest';
import Loading from 'Views/Loading';

export default class App extends React.Component {
  state = {
    isAuthenticated: undefined,
  };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: C.FIREBASE_API_KEY,
      authDomain: C.FIREBASE_AUTH_DOMAIN,
      databaseURL: C.FIREBASE_DATABASE_URL,
      messagingSenderId: C.FIREBASE_MESSAGING_SENDER_ID,
      projectId: C.FIREBASE_PROJECT_ID,
      storageBucket: C.FIREBASE_STORAGE_BUCKET,
    });

    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isAuthenticated: !!user });
    });
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    const { isAuthenticated } = this.state;

    if (isAuthenticated === true) {
      return <Authenticated />;
    }

    if (isAuthenticated === false) {
      return <Guest />;
    }

    return <Loading />;
  }
}
