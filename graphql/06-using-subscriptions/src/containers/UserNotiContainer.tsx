import React from 'react';
import { NetworkStatus } from '@apollo/client';

// graphql subscription
import { getNewUserJoined } from '../operations/remote/subscriptions';

import Refetching from '../components/Refetching';
import Loading from '../components/Loading';
import Error from '../components/Error';
import NoData from '../components/NoData';
import UserNoti from '../components/UserNoti';

export default function UserNotiContainer(): React.ReactElement {
  const { loading, error, data } = getNewUserJoined();

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

  const newUser = data.newUserJoined;
  return <UserNoti newUser={newUser} />;
}
