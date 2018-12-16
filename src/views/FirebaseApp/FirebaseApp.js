// @flow

import firebase from 'firebase';
import * as React from 'react';

import FirebaseAuth from '../../components/FirebaseAuth';
import type { FirebaseApp as FirebaseAppType } from '../../lib/firebaseApp';

type Props = {
  app: FirebaseAppType,
  handleBackClick: () => void,
  handleDeleteClick: () => void,
  handleShareClick: () => void,
};

type State = {
  firebaseApp: ?Object,
};

export default class FirebaseApp extends React.Component<Props, State> {
  state = {
    firebaseApp: undefined,
  };

  componentDidMount() {
    const { app } = this.props;

    const firebaseApp = firebase.initializeApp(app.config);

    console.log('Firebase app initialized', app.config);

    this.setState({ firebaseApp });
  }

  componentWillUnmount() {
    const { app } = this.props;
    const { firebaseApp } = this.state;

    firebaseApp.delete()
      .then(() => console.log('Firebase app deleted', app.config));
  }

  render() {
    const {
      app, handleBackClick, handleDeleteClick, handleShareClick,
    } = this.props;
    const { firebaseApp } = this.state;

    return (
      <React.Fragment>

        <h1>Firebase app</h1>

        <div>
          <button onClick={handleBackClick} type="button">Back</button>
          <button onClick={handleShareClick} type="button">Share</button>
          <button onClick={handleDeleteClick} type="button">Delete</button>
        </div>

        <div>
          {JSON.stringify(app)}
        </div>

        {firebaseApp
          ? <FirebaseAuth firebaseApp={firebaseApp} />
          : <div>Initializing Firebase app...</div>}

      </React.Fragment>
    );
  }
}
