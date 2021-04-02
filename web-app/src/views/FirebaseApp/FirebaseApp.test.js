import classes from 'identity-obj-proxy';
import { shallow } from 'enzyme';
import React from 'react';

import FirebaseApp from './FirebaseApp';
import app from '../../lib/__test-data__/firebaseApp';

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
