/* eslint-disable import/no-extraneous-dependencies */

import classes from 'identity-obj-proxy';
import { shallow } from 'enzyme';
import React from 'react';

import Logo from './Logo';

describe('<Logo />', () => {
  it('renders without crashing and matches snapshot', () => {
    const wrapper = shallow(
      <Logo
        classes={classes}
        className="logo"
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
