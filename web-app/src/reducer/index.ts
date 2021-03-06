import type { Action } from '../actions';
import * as T from '../actions/types';
import type { FirebaseApp } from '../lib/firebaseApp';
import * as R from '../routes';

export type State = {
  currentFirebaseApp: string,
  firebaseApps: { [string]: FirebaseApp },
  route: string,
  routeParams: Record<string, unknown>,
};

const initialState = {
  currentFirebaseApp: '',
  firebaseApps: {},
  route: R.HOME,
  routeParams: {},
};

export const persistedPaths = ['currentFirebaseApp', 'firebaseApps'];

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case T.NAVIGATE:
      return {
        ...state,
        route: action.payload.route,
        routeParams: action.payload.params ? action.payload.params : {},
      };

    case T.FIREBASE_APP_CREATED:
    case T.FIREBASE_APP_UPDATED:
      return {
        ...state,
        firebaseApps: {
          ...state.firebaseApps,
          [action.payload.id]: action.payload,
        },
      };

    case T.FIREBASE_APP_DELETED: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [action.payload]: deleted, ...firebaseApps } = state.firebaseApps;

      return {
        ...state,
        currentFirebaseApp: (action.payload === state.currentFirebaseApp
          ? '' : state.currentFirebaseApp),
        firebaseApps,
      };
    }

    case T.FIREBASE_APP_SELECTED:
      return {
        ...state,
        currentFirebaseApp: action.payload,
      };

    default:
      return state;
  }
};
