import React, { ReactElement, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  RouteProps,
} from 'react-router-dom';

interface State {
  isAuthenticated: boolean;
  user: string | null;
  token: string | null;
}
type Action = {
  type: 'LOGIN' | 'LOGOUT';
};

const initialState: State = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: 'fakeUser',
        token: 'fakeToken',
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    default:
      throw new Error('Unhandled Action');
  }
};

interface AuthContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const AuthContext = React.createContext({} as AuthContextProps);

const PrivateRoute = ({ children, ...rest }: RouteProps): ReactElement => {
  const { state } = React.useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
};

const App: React.FC = (): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            {state.isAuthenticated ? (
              <>
                <li>
                  <Link to="/protected">Protected Page</Link>
                </li>
                <li>
                  <LogoutButton />
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
          <Switch>
            <Route path="/public">
              <PublicPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/protected">
              <ProtectedPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

const PublicPage: React.FC = (): ReactElement => {
  return <h3>Public</h3>;
};

const ProtectedPage: React.FC = (): ReactElement => {
  return <h3>Protected</h3>;
};

const LoginPage: React.FC = (): ReactElement => {
  const { dispatch } = React.useContext(AuthContext);
  const doLogin = (): void => dispatch({ type: 'LOGIN' });
  return (
    <div>
      <p>You must log in to view the page at ...</p>
      <button onClick={doLogin}>Log in</button>
    </div>
  );
};

const LogoutButton: React.FC = (): ReactElement => {
  const { dispatch } = React.useContext(AuthContext);
  const doLogout = (): void => dispatch({ type: 'LOGOUT' });
  return <button onClick={doLogout}>Logout</button>;
};
export default App;
