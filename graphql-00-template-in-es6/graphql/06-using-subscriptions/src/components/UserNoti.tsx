import PropTypes from 'prop-types';
import React from 'react';

interface UserNotiProps {
  newUser: User;
}
const UserNoti = ({ newUser }: UserNotiProps): React.ReactElement => {
  return <div>{newUser.name} is joined.</div>;
};

UserNoti.propType = {
  newUser: PropTypes.object.isRequired,
};

export default UserNoti;
