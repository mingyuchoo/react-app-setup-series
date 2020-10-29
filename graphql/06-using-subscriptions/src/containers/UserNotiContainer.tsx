import React from 'react';

// graphql subscription
import { useNewUserJoined } from '../operations/remote/subscriptions';

import Loading from '../components/Loading';
import Error from '../components/Error';
import NoData from '../components/NoData';
import UserNoti from '../components/UserNoti';
import { User } from '../types/profileTypes';

export default function UserNotiContainer(): React.ReactElement {
  const { data, loading, error } = useNewUserJoined();

  // loading
  if (loading) return <Loading />;

  // error
  if (error) return <Error />;

  // no data
  if (!data) return <NoData />;

  // TODO  data.newUserJoined is Null
  console.log(data);
  const newUser: User = data.newUserJoined;
  return <UserNoti newUser={newUser} />;
}
