import React, { useState, ReactElement } from 'react';

import { Route } from 'react-router-dom';

const Users: React.FC<RouterProps> = ({ match }): ReactElement => {
  return (
    <div>
      <h1>Users</h1>
      <Route exact path={match.path} component={UserList} />
      <Route path={`${match.path}/:id`} component={UserDetail} />
    </div>
  );
};

export default Users;
