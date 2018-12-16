// @flow

import {
  compose, withHandlers, withProps, type HOC,
} from 'recompose';

import type { FirebaseApp } from '../../lib/firebaseApp';
import { redirect } from '../../lib/location';

type EnhancedComponentProps = {
  app: FirebaseApp,
  appInstance: Object,
};

const enhancer: HOC<*, EnhancedComponentProps> = compose(
  withHandlers({

    handleContinueClick: ({ app, appInstance }) => () => {
      const user = appInstance.auth().currentUser;

      if (!user) {
        throw new Error('User is missing');
      }

      const { refreshToken } = user;

      redirect(app.redirect.url.replace(app.redirect.refreshTokenPlaceholder, refreshToken));
    },

    handleSignOutClick: ({ appInstance }) => () => {
      appInstance.auth().signOut();
    },

  }),
  withProps(({ appInstance }) => {
    const user = appInstance.auth().currentUser;

    if (!user) {
      throw new Error('User is missing');
    }

    return {
      email: user.email || '',
      name: user.displayName || '',
      pictureUrl: user.photoURL || '',
    };
  }),
);

export default enhancer;
