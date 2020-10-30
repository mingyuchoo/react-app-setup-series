import React from 'react';
import { NetworkStatus } from '@apollo/client';

// graphql queries, mutations
import { useGetAllUsers, useLazyGetAllUsers } from '../operations/remote/queries';

import Status from '../components/Status';
import UserList from '../components/UserList';
import { NEW_USER_JOINED } from '../graphql/remote/subscriptions';

export default function UserListContainer(): React.ReactElement {
  const { networkStatus, loading, error, data, refetch, subscribeToMore } = useGetAllUsers();
  const [getNewUsers, { loading: lazyLoading, data: lazyData }] = useLazyGetAllUsers();
  // refetching
  if (networkStatus === NetworkStatus.refetch) {
    return <Status info={'Refetching...'} />;
  }

  // loading
  if (loading || lazyLoading) return <Status info={'Loading...'} />;

  // error
  if (error) return <Status info={'Error!'} />;

  // no data
  if (!data) return <Status info={'No data'} />;

  const allUsers = data.getAllUsers;
  return (
    <div>
      <UserList
        vars={{
          allUsers,
        }}
        actions={{
          refetch,
        }}
        // TODO Subscription 감지하면 자동으로 조회 하도록
        // subscribeNewUserJoined={() =>
        //   subscribeToMore({
        //     document: NEW_USER_JOINED,
        //     updateQuery: (prev, { subscriptionData }) => {
        //       if (!subscriptionData) return prev;
        //       const newFeedItem = subscriptionData.data.newUserJoined;
        //       return Object.assign({}, prev, {
        //         post: {
        //           comments: [newFeedItem, ...prev.post.comments],
        //         },
        //       });
        //     },
        //   })
        // }
      />
      // TODO 변경 필요
      <button className="button" onClick={() => getNewUsers()}>
        Up new Users
      </button>
    </div>
  );
}
