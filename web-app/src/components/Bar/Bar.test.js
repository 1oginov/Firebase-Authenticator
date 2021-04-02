// @flow

import classes from 'identity-obj-proxy';
import { shallow } from 'enzyme';
import React from 'react';

import Bar from './Bar';

describe('<Bar />', () => {
  it('renders without crashing and matches snapshot', () => {
    const wrapper = shallow(
      <Bar
        classes={classes}
        navigationClick={() => undefined}
        title="Title"
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
