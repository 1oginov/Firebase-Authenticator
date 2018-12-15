// @flow

import firebase from 'firebase';
import * as React from 'react';

import * as C from '../../constants';
import { getQueryParameter } from '../../lib/location';
import Authenticated from '../../views/Authenticated';
import Error from '../../views/Error';
import Guest from '../../views/Guest';
import Loading from '../../views/Loading';

type Props = {};

type State = {
  error: string,
  isAuthenticated: ?boolean,
};

export default class App extends React.Component<Props, State> {
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
    if (this.unregisterAuthObserver) {
      this.unregisterAuthObserver();
    }
  }

  unregisterAuthObserver: ?Function;

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
