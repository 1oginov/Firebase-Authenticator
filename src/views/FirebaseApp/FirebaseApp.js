// @flow

import EditIcon from '@material-ui/icons/Edit';
import MenuIcon from '@material-ui/icons/Menu';
import ShareIcon from '@material-ui/icons/Share';
import firebase from 'firebase/app';
import 'firebase/auth';
import * as React from 'react';

import Authenticated from '../../components/Authenticated';
import Bar from '../../components/Bar';
import FirebaseAuth from '../../components/FirebaseAuth';
import type { FirebaseApp as FirebaseAppType } from '../../lib/firebaseApp';

type Props = {
  app: FirebaseAppType,
  classes: { [string]: string },
  handleBackClick: () => void,
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
      app, classes, handleBackClick, handleShareClick, handleUpdateClick,
    } = this.props;

    return (
      <React.Fragment>

        <Bar
          actionItems={[
            {
              click: handleUpdateClick,
              icon: <EditIcon />,
            },
            {
              click: handleShareClick,
              icon: <ShareIcon />,
            },
          ]}
          navigationClick={handleBackClick}
          navigationIcon={<MenuIcon />}
          title={app.title ? app.title : app.id}
        />

        <div className={classes.root}>

          {this.renderAuthComponent()}

          <div>
            <pre>{JSON.stringify(app, null, 2)}</pre>
          </div>

        </div>

      </React.Fragment>
    );
  }
}
