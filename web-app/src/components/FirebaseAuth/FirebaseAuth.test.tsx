/* eslint-disable import/no-extraneous-dependencies */

import firebase from 'firebase/app';
import { shallow } from 'enzyme';
import React from 'react';

import app from 'lib/__test-data__/firebaseApp.json';

import FirebaseAuth from './FirebaseAuth';

const appInstance = firebase.initializeApp(app.config);

describe('<FirebaseAuth />', () => {
  it('renders without crashing and matches snapshot', () => {
    const wrapper = shallow(
      <FirebaseAuth
        appInstance={appInstance}
        signInOptions={app.signInOptions}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
