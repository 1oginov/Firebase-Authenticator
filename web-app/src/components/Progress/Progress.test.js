// @flow

import classes from 'identity-obj-proxy';
import { shallow } from 'enzyme';
import React from 'react';

import Progress from './Progress';

describe('<Progress />', () => {
  it('renders without crashing and matches snapshot', () => {
    const wrapper = shallow(
      <Progress
        classes={classes}
        text="Loading..."
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
