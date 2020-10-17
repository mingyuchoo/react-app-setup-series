import React from 'react';
import { NetworkStatus, useQuery } from '@apollo/client';

// graphql queries, mutations
import { GET_ALL_USERS } from '../operations/remote/queries';

// containers
import UserItem from './UserItem';

// components
import Refetching from './Refetching';
import Loading from './Loading';
import Error from './Error';

// // Other way (1)
// const UserList = (): React.ReactElement => {

// Other way (2)
function UserList(): React.ReactElement {
  // // Other way (1)
  // const { loading: queryLoading, error: queryError, data } = useQuery(GET_ALL_USERS,
  //   {
  //     pollInterval: 500,
  //   }
  //  );

  // Other way (2)
  const { loading: queryLoading, error: queryError, data, refetch, networkStatus } = useQuery(GET_ALL_USERS, {
    fetchPolicy: 'cache-first', // [cache-first, cache-only, cache-and-network, network-only, no-cache]
    notifyOnNetworkStatusChange: true,
  });

  // refetching
  if (networkStatus === NetworkStatus.refetch) {
    return Refetching();
  }

  // loading
  if (queryLoading) {
    return <Loading />;
  }

  // error
  if (queryError) {
    return <Error />;
  }

  return data.getAllUsers.map((user) => <UserItem key={user.id} user={user} refetch={refetch} />);
}

export default UserList;
