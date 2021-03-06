import React from 'react';
import { useGetName, useGetEmail } from '../operations/client/queries';

import UserTitle from '../components/UserTitle';

export default function UserTitleContainer(): React.ReactElement {
  const title = 'Apollo Client Reactive Variable Example';

  const nameQueryResult = useGetName();
  const emailQueryResult = useGetEmail();

  const name: string = nameQueryResult.data.name;
  const email: string = emailQueryResult.data.email;

  return <UserTitle title={title} name={name} email={email} />;
}
