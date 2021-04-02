import firebase from 'firebase/app';
import { shallow } from 'enzyme';
import React from 'react';

import FirebaseAuth from './FirebaseAuth';
import app from '../../lib/__test-data__/firebaseApp';

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
