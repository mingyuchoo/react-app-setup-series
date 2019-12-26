import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { RouterProps } from './Types';

import { users } from '../data/users.json';

const UserList: React.FC<RouterProps> = (props: RouterProps): ReactElement => {
  return (
    <div>
      <h1>User List</h1>
      <p>This is UserList page</p>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>
            <Link to={`${props.match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
