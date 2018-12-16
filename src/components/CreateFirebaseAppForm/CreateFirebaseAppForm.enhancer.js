// @flow

import {
  compose, withHandlers, withStateHandlers, type HOC,
} from 'recompose';
import uuidv1 from 'uuid/v1';

import type { FirebaseApp } from '../../lib/firebaseApp';

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
      redirectRefreshTokenPlaceholder: '%refreshToken%',
      redirectUrl: '',
      signInOptionEmail: false,
      signInOptionGithub: false,
      signInOptionGoogle: false,
      storageBucket: '',
      title: '',
    },
    {
      handleInputChange: () => (event) => {
        const {
          target: {
            checked, name, type, value,
          },
        } = event;

        return { [name]: type === 'checkbox' ? checked : value };
      },
    },
  ),
  withHandlers({

    handleSubmit: ({
      apiKey, authDomain, databaseUrl, messagingSenderId, onSubmit, projectId,
      redirectRefreshTokenPlaceholder, redirectUrl, signInOptionEmail, signInOptionGithub,
      signInOptionGoogle, storageBucket, title,
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
        redirect: {
          refreshTokenPlaceholder: redirectRefreshTokenPlaceholder,
          url: redirectUrl,
        },
        signInOptions: [
          // Such shorthand used to avoid Flow errors.
          ...(signInOptionEmail ? ['email'] : []),
          ...(signInOptionGithub ? ['github'] : []),
          ...(signInOptionGoogle ? ['google'] : []),
        ],
        title,
      });
    },

  }),
);

export default enhancer;
