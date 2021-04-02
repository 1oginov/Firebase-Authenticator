/* eslint-disable import/no-extraneous-dependencies */

import AddIcon from '@material-ui/icons/Add';
import classes from 'identity-obj-proxy';
import { shallow } from 'enzyme';
import React from 'react';

import app from 'lib/__test-data__/firebaseApp.json';

import FirebaseAppForm from './FirebaseAppForm';

describe('<FirebaseAppForm />', () => {
  it('renders without crashing and matches snapshot', () => {
    const wrapper = shallow(
      <FirebaseAppForm
        apiKey={app.config.apiKey}
        authDomain={app.config.authDomain}
        buttonIcon={(iconClass) => <AddIcon className={iconClass} />}
        buttonTitle="Test form"
        classes={classes}
        className="firebase-app-form"
        databaseUrl={app.config.databaseURL}
        handleInputChange={() => undefined}
        handleSubmit={() => undefined}
        messagingSenderId={app.config.messagingSenderId}
        projectId={app.config.projectId}
        redirectRefreshTokenPlaceholder={app.redirect.refreshTokenPlaceholder}
        redirectUrl={app.redirect.url}
        signInOptionEmail
        signInOptionGithub
        signInOptionGoogle
        storageBucket={app.config.storageBucket}
        title={app.title}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
