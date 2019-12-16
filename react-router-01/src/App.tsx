import React, { useState, ReactElement } from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch,
  withRouter,
} from 'react-router-dom';

import { users } from './data.json';

const App: React.FC = (): ReactElement => {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

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

const memberList = [
  { email: 'kim@test.com', password: '123', name: 'Kim' },
  { email: 'lee@test.com', password: '456', name: 'Lee' },
  { email: 'park@test.com', password: '789', name: 'Park' },
];

const signIn = (user: Member) => {
  const member = memberList.find(
    member => member.email === user.email && member.password === user.password
  );
  if (member === undefined) throw new Error();
  return user;
};

const AuthRoute = ({
  authenticated,
  component: Component,
  render,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};
