import classes from 'identity-obj-proxy';
import { shallow } from 'enzyme';
import React from 'react';

import app from '../../lib/__test-data__/firebaseApp';
import UpdateFirebaseApp from './UpdateFirebaseApp';

describe('<UpdateFirebaseApp />', () => {
  it('renders without crashing and matches snapshot', () => {
    const wrapper = shallow(
      <UpdateFirebaseApp
        app={app}
        classes={classes}
        handleBackClick={() => undefined}
        handleDeleteClick={() => undefined}
        onSubmit={() => undefined}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
