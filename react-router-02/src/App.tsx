import React, { useState, ReactElement } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';

import AuthRoute from './components/AuthRoute';

import About from './components/About';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import LogoutButton from './components/LogoutButton';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Users from './components/Users';

import { Member } from './components/Types';
import signIn from './utils/auth';

/**
 * https://www.daleseo.com/react-router-authentication/
 */
const App: React.FC = (): ReactElement => {
  const [user, setUser] = useState(null);
  const authenticated: boolean = user != null;

  const login = (member: Member): void => {
    setUser(signIn(member));
  };

  const logout = (): void => {
    setUser(null);
  };

  return (
    <div className="App">
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
          {authenticated ? (
            <LogoutButton logout={logout} />
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route
              path="/login"
              render={(props: RouteComponentProps) => (
                <LoginForm
                  authenticated={authenticated}
                  login={login}
                  {...props}
                />
              )}
            />
            <AuthRoute
              authenticated={authenticated}
              path="/profile"
              render={(props: RouteComponentProps) => (
                <Profile user={user} {...props} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
