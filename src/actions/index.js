// @flow

import * as T from './types';

import type { FirebaseApp } from '../lib/FirebaseApp';

export const createFirebaseApp = (app: FirebaseApp) => (dispatch) => {
  dispatch({
    payload: app,
    type: T.FIREBASE_APP_CREATED,
  });
};

export const deleteFirebaseApp = (id: string) => (dispatch) => {
  dispatch({
    payload: id,
    type: T.FIREBASE_APP_DELETED,
  });
};

export const selectFirebaseApp = (id: string) => (dispatch) => {
  dispatch({
    payload: id,
    type: T.FIREBASE_APP_SELECTED,
  });
};
