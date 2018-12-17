// @flow

import * as React from 'react';
import {
  compose, withHandlers, withStateHandlers, type HOC,
} from 'recompose';
import uuidv1 from 'uuid/v1';

import type { FirebaseApp } from '../../lib/firebaseApp';

type EnhancedComponentProps = {
  buttonIcon: (string) => React.Node,
  buttonTitle: string,
  classes: { [string]: string },
  className: string,
  initial?: FirebaseApp,
  onSubmit: FirebaseApp => void,
};

const enhancer: HOC<*, EnhancedComponentProps> = compose(
  withStateHandlers(
    ({ initial }) => ({
      apiKey: (initial && initial.config.apiKey) || '',
      authDomain: (initial && initial.config.authDomain) || '',
      databaseUrl: (initial && initial.config.databaseURL) || '',
      messagingSenderId: (initial && initial.config.messagingSenderId) || '',
      projectId: (initial && initial.config.projectId) || '',
      redirectRefreshTokenPlaceholder: ((initial && initial.redirect.refreshTokenPlaceholder)
        || '%refreshToken%'),
      redirectUrl: (initial && initial.redirect.url) || '',
      signInOptionEmail: (initial ? initial.signInOptions.indexOf('email') >= 0 : false),
      signInOptionGithub: (initial ? initial.signInOptions.indexOf('github') >= 0 : false),
      signInOptionGoogle: (initial ? initial.signInOptions.indexOf('google') >= 0 : false),
      storageBucket: (initial && initial.config.storageBucket) || '',
      title: (initial && initial.title) || '',
    }),
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
