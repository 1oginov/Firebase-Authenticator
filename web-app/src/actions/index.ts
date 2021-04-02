import type { Dispatch } from 'redux';

import type { FirebaseApp } from '../lib/firebaseApp';
import * as T from './types';

export type Action =
  | { type: typeof T.NAVIGATE, payload: { route: string, params: Record<string, unknown> | void } }
  | { type: typeof T.FIREBASE_APP_CREATED, payload: FirebaseApp }
  | { type: typeof T.FIREBASE_APP_UPDATED, payload: FirebaseApp }
  | { type: typeof T.FIREBASE_APP_DELETED, payload: string }
  | { type: typeof T.FIREBASE_APP_SELECTED, payload: string };

export const navigate = (route: string, params?: Record<string, unknown>) => (dispatch: Dispatch<Action>) => {
  dispatch({
    payload: { params, route },
    type: T.NAVIGATE,
  });
};

export const createFirebaseApp = (app: FirebaseApp) => (dispatch: Dispatch<Action>) => {
  dispatch({
    payload: app,
    type: T.FIREBASE_APP_CREATED,
  });
};

export const updateFirebaseApp = (id: string, app: FirebaseApp) => (dispatch: Dispatch<Action>) => {
  dispatch({
    payload: {
      ...app,
      id,
    },
    type: T.FIREBASE_APP_UPDATED,
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
