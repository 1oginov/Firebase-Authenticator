/* eslint-disable import/no-extraneous-dependencies */

import classes from 'identity-obj-proxy';
import { shallow } from 'enzyme';
import React from 'react';

import app from 'lib/__test-data__/firebaseApp.json';

import FirebaseApp from './FirebaseApp';

describe('<FirebaseApp />', () => {
  it('renders without crashing and matches snapshot', () => {
    const wrapper = shallow(
      <FirebaseApp
        app={app}
        classes={classes}
        handleBackClick={() => undefined}
        handleShareClick={() => undefined}
        handleUpdateClick={() => undefined}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
