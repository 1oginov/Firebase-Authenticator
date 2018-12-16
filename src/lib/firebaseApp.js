// @flow

import * as C from '../constants';

export type FirebaseApp = {
  config: {
    apiKey: string,
    authDomain: string,
    databaseURL: string,
    messagingSenderId: string,
    projectId: string,
    storageBucket: string,
  },
  id: string,
  title: string,
};

export const createShareLink = (app: FirebaseApp) => {
  const url = new URL(window.location.href);
  url.search = '';
  url.searchParams.append(C.FIREBASE_APP_SHARE_QUERY_PARAMETER, JSON.stringify(app));

  return url.toString();
};

export const parseShareLink = (link: string): FirebaseApp => {
  const url = new URL(link);
  const param = url.searchParams.get(C.FIREBASE_APP_SHARE_QUERY_PARAMETER);

  if (param) {
    try {
      return JSON.parse(param);
    } catch (error) {
      console.error(error);
    }
  }

  return undefined;
};
