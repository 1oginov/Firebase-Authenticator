// @flow

import { shallow } from 'enzyme';
import React from 'react';

import FirebaseAppsListItem from './FirebaseAppsListItem';
import app from '../../lib/__test-data__/firebaseApp';

describe('<FirebaseAppsListItem />', () => {
  it('renders without crashing and matches snapshot', () => {
    const wrapper = shallow(
      <FirebaseAppsListItem
        app={app}
        onSelect={() => undefined}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
