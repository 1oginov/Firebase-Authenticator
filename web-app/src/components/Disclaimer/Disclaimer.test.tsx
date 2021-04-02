/* eslint-disable import/no-extraneous-dependencies */

import classes from 'identity-obj-proxy';
import { shallow } from 'enzyme';
import React from 'react';

import Disclaimer from './Disclaimer';

describe('<Disclaimer />', () => {
  it('renders without crashing and matches snapshot', () => {
    const wrapper = shallow(
      <Disclaimer
        classes={classes}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
