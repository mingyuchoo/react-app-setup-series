import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_NAME, GET_EMAIL } from '../operations/local/queries';

import UserTitle from '../components/UserTitle';

export default function UserTitleContainer(): React.ReactElement {
  const title = 'Apollo Client Reactive Variable Example';

  const nameQueryResult = useQuery(GET_NAME);
  const emailQueryResult = useQuery(GET_EMAIL);

  const name: string = nameQueryResult.data.name;
  const email: string = emailQueryResult.data.email;

  return <UserTitle title={title} name={name} email={email} />;
}
