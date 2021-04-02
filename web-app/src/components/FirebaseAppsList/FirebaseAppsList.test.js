import classes from 'identity-obj-proxy';
import { shallow } from 'enzyme';
import React from 'react';

import FirebaseAppsList from './FirebaseAppsList';
import app from '../../lib/__test-data__/firebaseApp';

describe('<FirebaseAppsList />', () => {
  it('renders without crashing and matches snapshot', () => {
    const wrapper = shallow(
      <FirebaseAppsList
        apps={[app]}
        classes={classes}
        className="firebase-apps-list"
        onSelect={() => undefined}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
