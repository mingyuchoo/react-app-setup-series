import React from 'react';

// graphql subscription
import { useNewUserJoined } from '../operations/remote/subscriptions';

import Loading from '../components/Loading';
import Error from '../components/Error';
import NoData from '../components/NoData';
import UserNoti from '../components/UserNoti';

export default function UserNotiContainer(): React.ReactElement {
  const { data, loading, error } = useNewUserJoined();

  // loading
  if (loading) return <Loading />;

  // error
  if (error)
    return (
      <p>
        {error.name}:{error.message}
      </p>
    );

  // no data
  if (!data) return <NoData />;

  // TODO  data.newUserJoined is Null
  console.log(data);
  const newUser = data.newUserJoined;
  return <UserNoti newUser={newUser} />;
}
