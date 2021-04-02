/* eslint-disable import/no-extraneous-dependencies */

import classes from 'identity-obj-proxy';
import { shallow } from 'enzyme';
import React from 'react';

import app from 'lib/__test-data__/firebaseApp.json';

import FirebaseAppsList from './FirebaseAppsList';

describe('<FirebaseAppsList />', () => {
  it('renders without crashing and matches snapshot', () => {
    const wrapper = shallow(
      <FirebaseAppsList
        apps={[app]}
        classes={classes}
        className="firebase-apps-list"
        onSelect={() => undefined}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
