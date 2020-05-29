import React, { useContext, ReactElement } from 'react';
import { AuthContext } from '../App';

const Profile: React.FC = (): ReactElement => {
  const { state } = useContext(AuthContext);
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        <li>ID: {state.id}</li>
        <li>Name: {state.name}</li>
      </ul>
    </div>
  );
};

export default Profile;
