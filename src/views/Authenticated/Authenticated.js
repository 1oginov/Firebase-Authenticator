import firebase from 'firebase';
import * as React from 'react';

import * as C from '../../constants';
import { getQueryParameter, redirect } from '../../lib/location';

export default class Authenticated extends React.Component {
  state = {
    displayName: '',
    email: '',
  };

  componentDidMount() {
    const { displayName, email } = firebase.auth().currentUser;

    this.setState({ displayName, email });
  }

  handleContinue() { // eslint-disable-line class-methods-use-this
    const { refreshToken } = firebase.auth().currentUser;
    const redirectUrl = getQueryParameter(C.REDIRECT_QUERY_PARAMETER)
      .replace(C.REDIRECT_REFRESH_TOKEN_PLACEHOLDER, refreshToken);

    redirect(redirectUrl);
  }

  handleSignOut() { // eslint-disable-line class-methods-use-this
    firebase.auth().signOut();
  }

  render() {
    const { displayName, email } = this.state;

    return (
      <React.Fragment>

        <div>
          {'Signed in as '}
          <strong>{displayName}</strong>
          {' '}
          <em>{email}</em>
        </div>

        <div>
          <button onClick={this.handleContinue} type="button">Continue</button>
        </div>

        <div>
          <button onClick={this.handleSignOut} type="button">Sign out</button>
        </div>

      </React.Fragment>
    );
  }
}
