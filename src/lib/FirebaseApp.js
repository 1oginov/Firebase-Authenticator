// @flow

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
