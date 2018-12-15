// @flow

import type { Action } from '../actions';
import * as T from '../actions/types';
import type { FirebaseApp } from '../lib/FirebaseApp';
import * as R from '../routes';

export type State = {
  firebaseApps: { [string]: FirebaseApp },
  route: string,
  routeParams: Object,
  selectedFirebaseApp: string,
};

const initialState = {
  firebaseApps: {},
  route: R.FIREBASE_APPS,
  routeParams: {},
  selectedFirebaseApp: '',
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case T.NAVIGATE:
      return {
        ...state,
        route: action.payload.route,
        routeParams: action.payload.params ? action.payload.params : {},
      };

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
