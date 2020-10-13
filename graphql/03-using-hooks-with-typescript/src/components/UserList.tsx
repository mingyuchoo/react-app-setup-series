import React from 'react';
import { gql, NetworkStatus, useQuery } from '@apollo/client';
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


  // -- Updating chached query results [1]
  // const { loading: queryLoading, error: queryError, data } = useQuery(GET_ALL_USERS,
  //   {
  //     pollInterval: 500,
  //   }
  //   );

  // -- Updating chached query results [2]
  const { loading: queryLoading, error: queryError, data, refetch, networkStatus } = useQuery(GET_ALL_USERS,
    {
      notifyOnNetworkStatusChange: true,
    }
  );

  // refetching
  if (networkStatus === NetworkStatus.refetch) {
    return (
      <div className="App">
        <h2>Refetching...</h2>
      </div>
    );
  }

  // loading
  if (queryLoading) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }
  
  // error
  if (queryError) {
    return (
      <div className="App">
        <h2>Error</h2>
      </div>
    );
  }
  return data.getAllUsers.map((user) => <User key={user.id} user={user} refetch={refetch} />);
};

export default UserList;
