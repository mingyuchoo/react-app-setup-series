import React from 'react';
import { NetworkStatus, useQuery } from '@apollo/client';

// graphql queries, mutations
import { GET_ALL_USERS } from '../graphql/queries';

import Refetching from '../components/Refetching';
import Loading from '../components/Loading';
import Error from '../components/Error';
import NoData from '../components/NoData';
import UserList from '../components/UserList';

export default function UserListContainer(): React.ReactElement {
  const { networkStatus, loading, error, data, refetch } = useQuery(GET_ALL_USERS, {
    fetchPolicy: 'cache-first', // [cache-first, cache-only, cache-and-network, network-only, no-cache]
    notifyOnNetworkStatusChange: true,
  });

  // refetching
  if (networkStatus === NetworkStatus.refetch) {
    return <Refetching />;
  }

  // loading
  if (loading) {
    return <Loading />;
  }

  // error
  if (error) {
    return <Error />;
  }

  if (!data) {
    return <NoData />;
  }

  const allUsers = data.getAllUsers;
  return <UserList allUsers={allUsers} refetch={refetch} />;
}
