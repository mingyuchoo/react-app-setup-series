import React, { ReactElement } from 'react';
import { User } from './Types';

interface ProfileProps {
  user: User | null;
}
const Profile: React.FC<ProfileProps> = (props: ProfileProps): ReactElement => {
  const { id, name } = props.user || {};
  return (
    <div>
      <h1>Profile</h1>
      <dt>ID</dt>
      <dd>{id}</dd>
      <dt>Name</dt>
      <dd>{name}</dd>
    </div>
  );
};

export default Profile;
