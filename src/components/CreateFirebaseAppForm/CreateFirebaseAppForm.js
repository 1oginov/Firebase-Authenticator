// @flow

import * as React from 'react';

type Props = {
  apiKey: string,
  authDomain: string,
  databaseUrl: string,
  handleApiKeyChange: () => void,
  handleAuthDomainChange: () => void,
  handleDatabaseUrlChange: () => void,
  handleMessagingSenderIdChange: () => void,
  handleProjectIdChange: () => void,
  handleStorageBucketChange: () => void,
  handleSubmit: () => void,
  handleTitleChange: () => void,
  messagingSenderId: string,
  projectId: string,
  storageBucket: string,
  title: string,
};

const CreateFirebaseAppForm = ({
  apiKey, authDomain, databaseUrl, handleApiKeyChange, handleAuthDomainChange,
  handleDatabaseUrlChange, handleMessagingSenderIdChange, handleProjectIdChange,
  handleStorageBucketChange, handleSubmit, handleTitleChange, messagingSenderId, projectId,
  storageBucket, title,
}: Props) => (
  <form onSubmit={handleSubmit}>

    <div>
      Title
      <br />
      <input onChange={handleTitleChange} value={title} />
    </div>

    <div>
      API key
      <br />
      <input onChange={handleApiKeyChange} value={apiKey} />
    </div>

    <div>
      Auth domain
      <br />
      <input onChange={handleAuthDomainChange} value={authDomain} />
    </div>

    <div>
      Database URL
      <br />
      <input onChange={handleDatabaseUrlChange} value={databaseUrl} />
    </div>

    <div>
      Messaging sender ID
      <br />
      <input onChange={handleMessagingSenderIdChange} value={messagingSenderId} />
    </div>

    <div>
      Project ID
      <br />
      <input onChange={handleProjectIdChange} value={projectId} />
    </div>

    <div>
      Storage bucket
      <br />
      <input onChange={handleStorageBucketChange} value={storageBucket} />
    </div>

    <div>
      <button type="submit">Create</button>
    </div>

  </form>
);

export default CreateFirebaseAppForm;
