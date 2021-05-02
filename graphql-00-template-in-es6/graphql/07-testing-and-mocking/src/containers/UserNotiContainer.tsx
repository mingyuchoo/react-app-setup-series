import React from 'react';

import Status from '../components/Status';
import UserNoti from '../components/UserNoti';
// graphql subscription
import { useNewUserJoined } from '../operations/remote/subscriptions';

export default function UserNotiContainer(): React.ReactElement {
  const { data, loading, error } = useNewUserJoined();

  if (loading) return <Status info={'Waiting...'} />;
  if (error) return <Status info={'Error'} />;
  if (!data) return <Status info={'No data'} />;

  // TODO  data.newUserJoined is Null
  console.log(data);
  const newUser: User = data.newUserJoined;
  return <UserNoti newUser={newUser} />;
}
