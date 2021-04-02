import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { shallow } from 'enzyme';
import React from 'react';

import App from './App';
import themeOptions from '../../style/themeOptions';

const theme = createMuiTheme(themeOptions);

describe('<App />', () => {
  it('renders without crashing and matches snapshot', () => {
    const wrapper = shallow(
      <App
        theme={theme}
        route=""
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
