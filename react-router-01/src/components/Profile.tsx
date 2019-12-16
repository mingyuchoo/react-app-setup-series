import React, { ReactElement } from 'react';
import { Member } from './Types';

const Profile: React.FC<Member> = (member: Member): ReactElement => {
  const { email, password, name } = member || {};
  return (
    <div>
      <h1>Profile</h1>
      <dt>Emaili</dt>
      <dd>{email}</dd>
      <dt>Password</dt>
      <dd>{password}</dd>
      <dt>Name</dt>
      <dd>{name}</dd>
    </div>
  );
};

export default Profile;
