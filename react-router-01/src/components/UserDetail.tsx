import React, { ReactElement } from 'react';

const UserDetail: React.FC<RouterProps> = ({
  match,
  history,
}): ReactElement => {
  let user: User;
  user = users.find(user => user.id === match.params.id)!;
  return (
    <div>
      <h1>User Detail</h1>
      <p>This is User Detail page</p>
      <dt>id</dt>
      <dd>{user.id}</dd>
      <dt>name</dt>
      <dd>{user.name}</dd>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
};
