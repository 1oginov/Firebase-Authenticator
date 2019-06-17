// @flow

import classes from 'identity-obj-proxy';
import { shallow } from 'enzyme';
import React from 'react';

import Authenticated from './Authenticated';

describe('<Authenticated />', () => {
  it('renders without crashing and matches snapshot', () => {
    const wrapper = shallow(
      <Authenticated
        classes={classes}
        email="email@example.com"
        handleContinueClick={() => undefined}
        handleSignOutClick={() => undefined}
        name="Name"
        pictureUrl="https://example.com/picture.png"
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
