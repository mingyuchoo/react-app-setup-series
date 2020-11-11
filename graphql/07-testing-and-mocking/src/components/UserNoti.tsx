import React from 'react';

interface UserNotiProps {
  newUser: User;
}
const UserNoti: React.FC<UserNotiProps> = ({ newUser }: UserNotiProps): React.ReactElement => {
  return <div>{newUser.name} is joined.</div>;
};

export default UserNoti;
