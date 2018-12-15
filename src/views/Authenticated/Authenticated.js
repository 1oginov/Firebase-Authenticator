// @flow

import firebase from 'firebase';
import * as React from 'react';

import * as C from '../../constants';
import { getQueryParameter, redirect } from '../../lib/location';

type Props = {};

type State = {
  displayName: string,
  email: string,
};

export default class Authenticated extends React.Component<Props, State> {
  state = {
    displayName: '',
    email: '',
  };

  componentDidMount() {
    const user = firebase.auth().currentUser;

    if (!user) {
      throw new Error('User is missing');
    }

    this.setState({
      displayName: user.displayName || '',
      email: user.email || '',
    });
  }

  handleContinue() { // eslint-disable-line class-methods-use-this
    const user = firebase.auth().currentUser;

    if (!user) {
      throw new Error('User is missing');
    }

    const { refreshToken } = user;
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
