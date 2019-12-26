import React, { ReactElement } from 'react';

import {
  Route,
  Redirect,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';

interface AuthRouteProps extends RouteProps {
  authenticated: boolean;
}

const AuthRoute = ({
  authenticated,
  children,
  ...rest
}: AuthRouteProps): ReactElement => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};

export default AuthRoute;
