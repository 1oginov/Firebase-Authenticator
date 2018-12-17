// @flow

import * as React from 'react';

type Props = {
  apiKey: string,
  authDomain: string,
  buttonTitle: string,
  databaseUrl: string,
  handleInputChange: () => void,
  handleSubmit: () => void,
  messagingSenderId: string,
  projectId: string,
  redirectRefreshTokenPlaceholder: string,
  redirectUrl: string,
  signInOptionEmail: boolean,
  signInOptionGithub: boolean,
  signInOptionGoogle: boolean,
  storageBucket: string,
  title: string,
};

const FirebaseAppForm = ({
  apiKey, authDomain, buttonTitle, databaseUrl, handleInputChange, handleSubmit, messagingSenderId,
  projectId, redirectRefreshTokenPlaceholder, redirectUrl, signInOptionEmail, signInOptionGithub,
  signInOptionGoogle, storageBucket, title,
}: Props) => (
  <form onSubmit={handleSubmit}>

    <div>
      Title
      <br />
      <input name="title" onChange={handleInputChange} value={title} />
    </div>

    <fieldset>

      <legend>Configuration</legend>

      <div>
        API key
        <br />
        <input name="apiKey" onChange={handleInputChange} value={apiKey} />
      </div>

      <div>
        Auth domain
        <br />
        <input name="authDomain" onChange={handleInputChange} value={authDomain} />
      </div>

      <div>
        Database URL
        <br />
        <input name="databaseUrl" onChange={handleInputChange} value={databaseUrl} />
      </div>

      <div>
        Messaging sender ID
        <br />
        <input name="messagingSenderId" onChange={handleInputChange} value={messagingSenderId} />
      </div>

      <div>
        Project ID
        <br />
        <input name="projectId" onChange={handleInputChange} value={projectId} />
      </div>

      <div>
        Storage bucket
        <br />
        <input name="storageBucket" onChange={handleInputChange} value={storageBucket} />
      </div>

    </fieldset>

    <fieldset>

      <legend>Redirect</legend>

      <div>
        URL
        <br />
        <input name="redirectUrl" onChange={handleInputChange} value={redirectUrl} />
      </div>

      <div>
        Refresh token placeholder
        <br />
        <input
          name="redirectRefreshTokenPlaceholder"
          onChange={handleInputChange}
          value={redirectRefreshTokenPlaceholder}
        />
      </div>

    </fieldset>

    <fieldset>

      <legend>Sign in options</legend>

      <div>
        <label htmlFor="signInOptionEmail">
          <input
            checked={signInOptionEmail}
            id="signInOptionEmail"
            name="signInOptionEmail"
            onChange={handleInputChange}
            type="checkbox"
          />
          Email
        </label>
      </div>

      <div>
        <label htmlFor="signInOptionGithub">
          <input
            checked={signInOptionGithub}
            id="signInOptionGithub"
            name="signInOptionGithub"
            onChange={handleInputChange}
            type="checkbox"
          />
          GitHub
        </label>
      </div>

      <div>
        <label htmlFor="signInOptionGoogle">
          <input
            checked={signInOptionGoogle}
            id="signInOptionGoogle"
            name="signInOptionGoogle"
            onChange={handleInputChange}
            type="checkbox"
          />
          Google
        </label>
      </div>

    </fieldset>

    <div>
      <button type="submit">{buttonTitle}</button>
    </div>

  </form>
);

export default FirebaseAppForm;
