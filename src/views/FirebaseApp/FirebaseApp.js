// @flow

import firebase from 'firebase';
import * as React from 'react';

import Authenticated from '../../components/Authenticated';
import FirebaseAuth from '../../components/FirebaseAuth';
import type { FirebaseApp as FirebaseAppType } from '../../lib/firebaseApp';

type Props = {
  app: FirebaseAppType,
  handleBackClick: () => void,
  handleDeleteClick: () => void,
  handleShareClick: () => void,
  handleUpdateClick: () => void,
};

type State = {
  appInstance: ?Object,
  isAuthenticated: ?boolean,
};

export default class FirebaseApp extends React.Component<Props, State> {
  state = {
    appInstance: undefined,
    isAuthenticated: undefined,
  };

  componentDidMount() {
    const { app } = this.props;
    const appInstance = firebase.initializeApp(app.config);

    try {
      this.unregisterAuthObserver = appInstance.auth().onAuthStateChanged((user) => {
        this.setState({ isAuthenticated: Boolean(user) });
      });
    } catch (error) {
      console.error(error);
    }

    console.log('Firebase app initialized', app.config);

    this.setState({ appInstance });
  }

  componentWillUnmount() {
    const { app } = this.props;
    const { appInstance } = this.state;

    if (this.unregisterAuthObserver) {
      this.unregisterAuthObserver();
    }

    if (appInstance) {
      appInstance.delete()
        .then(() => console.log('Firebase app deleted', app.config));
    }
  }

  unregisterAuthObserver: ?Function;

  renderAuthComponent() {
    const { app } = this.props;
    const { appInstance, isAuthenticated } = this.state;

    if (!appInstance) {
      return <div>Initializing Firebase app...</div>;
    }

    if (isAuthenticated === false) {
      return <FirebaseAuth appInstance={appInstance} signInOptions={app.signInOptions} />;
    }

    if (isAuthenticated === true) {
      return <Authenticated app={app} appInstance={appInstance} />;
    }

    return <div>Loading authentication state...</div>;
  }

  render() {
    const {
      app, handleBackClick, handleDeleteClick, handleShareClick, handleUpdateClick,
    } = this.props;

    return (
      <React.Fragment>

        <h1>{app.title}</h1>

        <div>
          <button onClick={handleBackClick} type="button">Back</button>
          <button onClick={handleUpdateClick} type="button">Update</button>
          <button onClick={handleShareClick} type="button">Share</button>
        </div>

        {this.renderAuthComponent()}

        <div>
          <pre>{JSON.stringify(app, null, 2)}</pre>
        </div>

        <div>
          <button onClick={handleDeleteClick} type="button">Delete</button>
        </div>

      </React.Fragment>
    );
  }
}
