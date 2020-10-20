import React from 'react';
import PropTypes from 'prop-types';

// components
import UserItem from './UserItem';

export interface UserListProps {
  data: any;
  refetch: () => void;
}

const UserList = ({ data, refetch }): React.ReactElement => {
  return data.getAllUsers.map((user) => <UserItem key={user.id} user={user} refetch={refetch} />);
};

UserList.propType = {
  data: PropTypes.any.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default UserList;
