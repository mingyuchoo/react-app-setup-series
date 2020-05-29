import React, { ReactElement } from 'react';
import { RouterProps } from './Types';

import { users } from '../data/users.json';

const UserDetail: React.FC<RouterProps> = (
  props: RouterProps
): ReactElement => {
  const user = users.find(user => user.id === props.match.params.id)!;
  return (
    <div>
      <h1>User Detail</h1>
      <p>This is User Detail page</p>
      <dt>id</dt>
      <dd>{user.id}</dd>
      <dt>name</dt>
      <dd>{user.name}</dd>
      <button onClick={() => props.history.goBack()}>Back</button>
    </div>
  );
};

export default UserDetail;
