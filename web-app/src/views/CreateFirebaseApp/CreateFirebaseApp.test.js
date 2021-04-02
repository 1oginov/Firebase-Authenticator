import classes from 'identity-obj-proxy';
import { shallow } from 'enzyme';
import React from 'react';

import CreateFirebaseApp from './CreateFirebaseApp';

describe('<CreateFirebaseApp />', () => {
  it('renders without crashing and matches snapshot', () => {
    const wrapper = shallow(
      <CreateFirebaseApp
        classes={classes}
        handleBackClick={() => undefined}
        onSubmit={() => undefined}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
