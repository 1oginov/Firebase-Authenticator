import { connect } from 'react-redux';
import { compose, withHandlers, type HOC } from 'recompose';

import { navigate as navigateCreator } from '../actions';

type HandlersMapper = {
  [string]: string | (Object, Object) => { route: string, params: Object },
};

const mapDispatchToProps = { navigate: navigateCreator };

const withNavigationHandlers = (handlersMapper: HandlersMapper): HOC<*, {}> => compose(
  connect(null, mapDispatchToProps),
  withHandlers(() => {
    const handlers = {};

    Object.keys(handlersMapper).forEach((key) => {
      handlers[key] = ({ navigate, ...props }) => (event) => {
        const value = handlersMapper[key];

        if (typeof value === 'function') {
          const { params, route } = value(props, event);
          navigate(route, params);
        } else {
          const route = handlersMapper[key];
          navigate(route);
        }
      };
    });

    return handlers;
  }),
);

export default withNavigationHandlers;
