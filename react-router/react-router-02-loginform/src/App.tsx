import React, {
  useContext,
  createContext,
  useState,
  useReducer,
  ReactElement,
} from 'react';

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

import About from './components/About';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import LogoutButton from './components/LogoutButton';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Users from './components/Users';

interface State {
  isAuthenticated: boolean;
  id: string;
  password: string;
  name: string;
  email: string;
  token: string;
}
type Action = {
  type: 'LOGIN' | 'LOGOUT';
};

const initialState: State = {
  isAuthenticated: false,
  id: '',
  password: '',
  name: '',
  email: '',
  token: '',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        id: 'fakeId',
        password: 'fakepassword',
        name: 'fakeName',
        email: 'fake@email.com',
        token: 'fakeToken',
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        id: '',
        password: '',
        name: '',
        email: '',
        token: '',
      };
    default:
      throw new Error('Unhandled Action');
  }
};

interface AuthContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const AuthContext = createContext({} as AuthContextProps);

const PrivateRoute = ({ children, ...rest }: RouteProps): ReactElement => {
  const { state } = useContext(AuthContext);
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

/**
 * https://www.daleseo.com/react-router-authentication/
 */
const App: React.FC = (): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <AuthContext.Provider value={{ state, dispatch }}>
        <Router>
          <header>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/about">
              <button>About</button>
            </Link>
            <Link to="/users">
              <button>Users</button>
            </Link>
            <Link to="/profile">
              <button>Profile</button>
            </Link>
            {state.isAuthenticated ? (
              <>
                <LogoutButton />
              </>
            ) : (
              <Link to="/login">
                <button>Login</button>
              </Link>
            )}
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/login" component={LoginForm} />
              <PrivateRoute path="/profile">
                <Profile />
              </PrivateRoute>
              <Route component={NotFound} />
            </Switch>
          </main>
        </Router>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
