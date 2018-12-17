// @flow

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { shallow } from 'enzyme';
import React from 'react';

import App from './App';
import themeOptions from '../../style/themeOptions';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App theme={createMuiTheme(themeOptions)} route="" />);
  });
});
