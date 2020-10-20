import React from 'react';
import PropTypes from 'prop-types';

// components
import UserItemContainer from '../containers/UserItemContainer';

export interface UserListProps {
  allUsers: any;
  refetch: () => void;
}

const UserList = ({ allUsers, refetch }): React.ReactElement => {
  return allUsers.map((user) => <UserItemContainer key={user.id} user={user} refetch={refetch} />);
};

UserList.propType = {
  allUsers: PropTypes.any.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default UserList;
