import React, { useState, ReactElement } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch,
  withRouter,
} from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import LogoutButton from './components/LogoutButton';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Users from './components/Users';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

/**
 * https://www.daleseo.com/react-router-authentication/
 */
const App: React.FC = (): ReactElement => {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }): void => {
    setUser(signIn({ email, password }));
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
            <AuthRoute
              authenticated={authenticated}
              path="/profile"
              render={props => <Proifle user={user} {...props} />}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
