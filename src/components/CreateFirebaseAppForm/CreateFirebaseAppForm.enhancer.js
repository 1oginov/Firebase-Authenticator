// @flow

import {
  compose, withHandlers, withStateHandlers, type HOC,
} from 'recompose';
import uuidv1 from 'uuid/v1';

import type { FirebaseApp } from '../../lib/FirebaseApp';

type EnhancedComponentProps = {
  onSubmit: FirebaseApp => void,
};

const enhancer: HOC<*, EnhancedComponentProps> = compose(
  withStateHandlers(
    {
      apiKey: '',
      authDomain: '',
      databaseUrl: '',
      messagingSenderId: '',
      projectId: '',
      storageBucket: '',
      title: '',
    },
    {
      handleApiKeyChange: () => event => ({ apiKey: event.target.value }),
      handleAuthDomainChange: () => event => ({ authDomain: event.target.value }),
      handleDatabaseUrlChange: () => event => ({ databaseUrl: event.target.value }),
      handleMessagingSenderIdChange: () => event => ({ messagingSenderId: event.target.value }),
      handleProjectIdChange: () => event => ({ projectId: event.target.value }),
      handleStorageBucketChange: () => event => ({ storageBucket: event.target.value }),
      handleTitleChange: () => event => ({ title: event.target.value }),
    },
  ),
  withHandlers({

    handleSubmit: ({
      apiKey, authDomain, databaseUrl, messagingSenderId, onSubmit, projectId, storageBucket, title,
    }) => (event) => {
      event.preventDefault();

      onSubmit({
        config: {
          apiKey,
          authDomain,
          databaseURL: databaseUrl,
          messagingSenderId,
          projectId,
          storageBucket,
        },
        id: uuidv1(),
        title,
      });
    },

  }),
);

export default enhancer;
