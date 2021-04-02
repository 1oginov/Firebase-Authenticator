/* eslint-disable import/no-extraneous-dependencies */

import classes from 'identity-obj-proxy';
import { shallow } from 'enzyme';
import React from 'react';

import app from 'lib/__test-data__/firebaseApp.json';

import Home from './Home';

describe('<Home />', () => {
  it('renders without crashing and matches snapshot', () => {
    const wrapper = shallow(
      <Home
        apps={[app]}
        classes={classes}
        handleCreateFirebaseAppClick={() => undefined}
        onSelect={() => undefined}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
