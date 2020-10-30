import React from 'react';

// graphql subscription
import { useNewUserJoined } from '../operations/remote/subscriptions';

import Status from '../components/Status';
import UserNoti from '../components/UserNoti';

export default function UserNotiContainer(): React.ReactElement {
  const { data, loading, error } = useNewUserJoined();

  // loading
  if (loading) return <Status info={'Loading...'} />;

  // error
  if (error) return <Status info={'Error'} />;

  // no data
  if (!data) return <Status info={'No data'} />;

  // TODO  data.newUserJoined is Null
  console.log(data);
  const newUser: User = data.newUserJoined;
  return <UserNoti newUser={newUser} />;
}
