import { NetworkStatus } from '@apollo/client';
import React from 'react';

import Status from '../components/Status';
import UserList from '../components/UserList';
import { NEW_USER_JOINED } from '../graphql/remote/subscriptions';
// graphql queries, mutations
import { useGetAllUsers } from '../operations/remote/queries';
import { moreOptions } from '../operations/remote/subscriptions';

export default function UserListContainer(): React.ReactElement {
  const { networkStatus, loading, error, data, refetch, subscribeToMore } = useGetAllUsers();

  if (networkStatus === NetworkStatus.refetch) return <Status info={'Refetching...'} />;
  if (loading) return <Status info={'Loading...'} />;
  if (error) return <Status info={'Error!'} />;
  if (!data) return <Status info={'No data'} />;

  const allUsers = data.getAllUsers;

  // [subscribeToMore 사용방법 1]
  // const more = () => {
  //   subscribeToMore({
  //     document: NEW_USER_JOINED,
  //     updateQuery: (prev, { subscriptionData }) => {
  //       if (!subscriptionData.data) return prev;
  //       const newUserJoined = subscriptionData.data.newUserJoined;
  //       return Object.assign({}, prev, {
  //         getAllUsers: [newUserJoined, ...prev.getAllUsers],
  //       });
  //     },
  //   });
  // };

  // [subscribeToMore 사용방법 2]
  const more = () => {
    subscribeToMore(moreOptions);
  };

  return (
    <div>
      <UserList
        vars={{
          allUsers,
        }}
        actions={{
          refetch,
          more,
        }}
      />
    </div>
  );
}
