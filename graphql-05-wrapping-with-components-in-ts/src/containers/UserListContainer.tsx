import React from 'react';
import { NetworkStatus } from '@apollo/client';

// graphql queries, mutations
import { useGetAllUsers } from '../operations/remote/queries';

import Refetching from '../components/Refetching';
import Loading from '../components/Loading';
import Error from '../components/Error';
import NoData from '../components/NoData';
import UserList from '../components/UserList';

export default function UserListContainer(): React.ReactElement {
  const { networkStatus, loading, error, data, refetch } = useGetAllUsers();
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
