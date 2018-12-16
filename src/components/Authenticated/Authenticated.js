// @flow

import * as React from 'react';

type Props = {
  email: string,
  handleContinueClick: () => void,
  handleSignOutClick: () => void,
  name: string,
  pictureUrl: string,
};

const Authenticated = ({
  email, handleContinueClick, handleSignOutClick, name, pictureUrl,
}: Props) => (
  <React.Fragment>

    <div>
      {'Signed in as '}
      <strong>{name}</strong>
      {' '}
      <em>{email}</em>
    </div>

    <div>
      <button onClick={handleContinueClick} type="button">Continue</button>
    </div>

    <div>
      <button onClick={handleSignOutClick} type="button">Sign out</button>
    </div>

    <div>
      <img alt="User" src={pictureUrl} />
    </div>

  </React.Fragment>
);

export default Authenticated;
