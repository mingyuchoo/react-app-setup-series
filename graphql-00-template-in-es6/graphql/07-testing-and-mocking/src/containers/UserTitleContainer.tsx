import React from 'react';

import UserTitle from '../components/UserTitle';
import { useGetEmail, useGetName } from '../operations/client/queries';

export default function UserTitleContainer(): React.ReactElement {
  const title = 'Apollo Client Reactive Variable Example';

  const nameQueryResult = useGetName();
  const emailQueryResult = useGetEmail();

  const name: string = nameQueryResult.data.name;
  const email: string = emailQueryResult.data.email;

  return <UserTitle title={title} name={name} email={email} />;
}
