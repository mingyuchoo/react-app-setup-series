import React from 'react';
import { NetworkStatus, useQuery } from '@apollo/client';

// graphql queries, mutations
import { GET_ALL_USERS } from '../operations/remote/queries';

import Refetching from '../components/Refetching';
import Loading from '../components/Loading';
import Error from '../components/Error';
import NoData from '../components/NoData';
import UserList from '../components/UserList';

export default function UserListContainer(): React.ReactElement {
  const { loading: queryLoading, error: queryError, data, refetch, networkStatus } = useQuery(GET_ALL_USERS, {
    fetchPolicy: 'cache-first', // [cache-first, cache-only, cache-and-network, network-only, no-cache]
    notifyOnNetworkStatusChange: true,
  });

  // refetching
  if (networkStatus === NetworkStatus.refetch) {
    return <Refetching />;
  }

  // loading
  if (queryLoading) {
    return <Loading />;
  }

  // error
  if (queryError) {
    return <Error />;
  }

  if (!data) {
    return <NoData />;
  }

  // return data.getAllUsers.map((user) => <UserItem key={user.id} user={user} refetch={refetch} />);
  return <UserList data={data} refetch={refetch} />;
}
