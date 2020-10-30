import React from 'react';
import PropTypes from 'prop-types';

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
