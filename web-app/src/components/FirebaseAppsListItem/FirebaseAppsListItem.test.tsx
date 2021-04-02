/* eslint-disable import/no-extraneous-dependencies */

import { shallow } from 'enzyme';
import React from 'react';

import app from 'lib/__test-data__/firebaseApp.json';

import FirebaseAppsListItem from './FirebaseAppsListItem';

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
