// @flow

import type { Dispatch } from 'redux';

import type { FirebaseApp } from '../lib/FirebaseApp';
import * as T from './types';

export type Action =
  | { type: typeof T.FIREBASE_APP_CREATED, payload: FirebaseApp }
  | { type: typeof T.FIREBASE_APP_DELETED, payload: string }
  | { type: typeof T.FIREBASE_APP_SELECTED, payload: string };

export const createFirebaseApp = (app: FirebaseApp) => (dispatch: Dispatch<Action>) => {
  dispatch({
    payload: app,
    type: T.FIREBASE_APP_CREATED,
  });
};

export const deleteFirebaseApp = (id: string) => (dispatch: Dispatch<Action>) => {
  dispatch({
    payload: id,
    type: T.FIREBASE_APP_DELETED,
  });
};

export const selectFirebaseApp = (id: string) => (dispatch: Dispatch<Action>) => {
  dispatch({
    payload: id,
    type: T.FIREBASE_APP_SELECTED,
  });
};
