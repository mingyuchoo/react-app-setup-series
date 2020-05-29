import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';

import UserList from './UserList';
import UserDetail from './UserDetail';
import { RouterProps } from './Types';

const Users: React.FC<RouterProps> = (props: RouterProps): ReactElement => {
  return (
    <div>
      <h1>Users</h1>
      <Route exact path={props.match.path} component={UserList} />
      <Route path={`${props.match.path}/:id`} component={UserDetail} />
    </div>
  );
};

export default Users;
