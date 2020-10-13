import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './UserList.scss';

import User from './User';

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      name
      email
    }
  }
`;

// const UserList = (): React.ReactElement => {
function UserList(): React.ReactElement {
  const { loading, data, refetch } = useQuery(GET_ALL_USERS);

  // loading
  if (loading) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }
  return data.getAllUsers.map((user) => <User key={user.id} user={user} refetch={refetch} />);
};

export default UserList;
