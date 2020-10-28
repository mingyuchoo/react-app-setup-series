import React from 'react';
import PropTypes from 'prop-types';

// types
import { User } from '../types/profileTypes';

// components
import UserNotiContainer from '../containers/UserNotiContainer';

interface UserNotiProps {
  newUser: User;
}
const UserNoti = ({ newUser }: UserNotiProps): React.ReactElement => {
  return <div>{newUser.email}</div>;
};

UserNoti.propType = {
  newUser: PropTypes.object.isRequired,
};

export default UserNoti;
