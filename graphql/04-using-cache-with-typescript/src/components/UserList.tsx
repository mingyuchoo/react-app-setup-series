import React from 'react';
import { NetworkStatus, useQuery } from '@apollo/client';

import User from './User';

import { GET_ALL_USERS } from '../graphql/queries';

import './UserList.scss';

/**
 * // Other way (1)
 *
 * const UserList = (): React.ReactElement => {
 */

// Other way (2)
function UserList(): React.ReactElement {
  /**
   * // Other way (1)
   *
   * const { loading: queryLoading, error: queryError, data } = useQuery(GET_ALL_USERS,
   *   {
   *     pollInterval: 500,
   *   }
   *   );
   */

  // Other way (2)
  const { loading: queryLoading, error: queryError, data, refetch, networkStatus } = useQuery(GET_ALL_USERS, {
    fetchPolicy: 'cache-first', // [cache-first, cache-only, cache-and-network, network-only, no-cache]
    notifyOnNetworkStatusChange: true,
  });

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
}

export default UserList;
