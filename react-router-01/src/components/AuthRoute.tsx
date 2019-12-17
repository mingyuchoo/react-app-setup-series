import React, { ReactElement } from 'react';

import {
  Route,
  Redirect,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';

interface AuthRouteProps extends RouteProps {
  // Component: React.FC<RouteComponentProps>;
  // path: string;
  // exact?: boolean;
  authenticated: boolean;
}

const AuthRoute = ({
  // Component,
  path,
  exact,
  authenticated,
  children,
}: AuthRouteProps): ReactElement => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) =>
        authenticated ? (
          { children }
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
