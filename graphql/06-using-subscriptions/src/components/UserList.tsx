import React from 'react';
import PropTypes from 'prop-types';

// components
import UserItemContainer from '../containers/UserItemContainer';

export interface UserListProps {
  allUsers: any;
  refetch: () => void;
}

const UserList = ({ allUsers, refetch }): React.ReactElement => {
  return allUsers.map((user) => (
    <UserItemContainer key={user.id} user={user} refetch={refetch} />
  )) as React.ReactElement; //   Unsafe return of an any typed value 에러 때문에 as React.ReactElement 추가함
};

UserList.propType = {
  allUsers: PropTypes.any.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default UserList;
