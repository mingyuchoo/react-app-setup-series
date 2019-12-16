import React, { ReactElement } from 'react';

const UserList: React.FC<RouterProps> = ({ match }): ReactElement => {
  return (
    <div>
      <h1>User List</h1>
      <p>This is UserList page</p>
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
