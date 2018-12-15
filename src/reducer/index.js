// @flow

import * as T from '../actions/types';
import type { FirebaseApp } from '../lib/FirebaseApp';

type State = {
  firebaseApps: { [string]: FirebaseApp },
  selectedFirebaseApp: string,
};

type Action =
  | { type: typeof T.FIREBASE_APP_CREATED, payload: FirebaseApp }
  | { type: typeof T.FIREBASE_APP_DELETED, payload: string }
  | { type: typeof T.FIREBASE_APP_SELECTED, payload: string };

const initialState = {
  firebaseApps: {},
  selectedFirebaseApp: '',
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case T.FIREBASE_APP_CREATED:
      return {
        ...state,
        firebaseApps: {
          ...state.firebaseApps,
          [action.payload.id]: action.payload,
        },
      };

    case T.FIREBASE_APP_DELETED: {
      const { [action.payload]: deleted, ...firebaseApps } = state.firebaseApps;

      return {
        ...state,
        firebaseApps,
        selectedFirebaseApp: (action.payload === state.selectedFirebaseApp
          ? '' : state.selectedFirebaseApp),
      };
    }

    case T.FIREBASE_APP_SELECTED:
      return {
        ...state,
        selectedFirebaseApp: action.payload,
      };

    default:
      return state;
  }
};
