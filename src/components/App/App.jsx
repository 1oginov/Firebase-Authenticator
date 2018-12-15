import firebase from 'firebase';
import * as React from 'react';

import * as C from 'Constants';
import { getQueryParameter } from 'Lib/location';
import Authenticated from 'Views/Authenticated';
import Error from 'Views/Error';
import Guest from 'Views/Guest';
import Loading from 'Views/Loading';

export default class App extends React.Component {
  state = {
    error: '',
    isAuthenticated: undefined,
  };

  componentDidMount() {
    if (!getQueryParameter(C.REDIRECT_QUERY_PARAMETER)) {
      this.setState({
        error: `Redirect query parameter "${C.REDIRECT_QUERY_PARAMETER}" is missing`,
      });

      return;
    }

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
    const { error, isAuthenticated } = this.state;

    if (error) {
      return <Error text={error} />;
    }

    if (isAuthenticated === true) {
      return <Authenticated />;
    }

    if (isAuthenticated === false) {
      return <Guest />;
    }

    return <Loading />;
  }
}
