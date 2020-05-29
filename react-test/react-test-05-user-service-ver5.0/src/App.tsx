import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import UsersPage from './pages/Users/UsersContainer';

const App = (): ReactElement => {
  return (
    <Router>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link>
            <Link to="/">Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link>
            <Link to="/users">Users</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Route path="/" exact component={UsersPage} />
      <Route path="/users" exact component={UsersPage} />
    </Router>
  );
};

export default App;
