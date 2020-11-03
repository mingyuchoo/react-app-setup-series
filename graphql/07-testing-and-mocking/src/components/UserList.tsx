import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

// components
import UserItemContainer from '../containers/UserItemContainer';

export interface UserListProps {
  vars: any;
  actions: any;
}

const UserList = ({ vars, actions }: UserListProps): React.ReactElement => {
  useEffect(() => {
    actions.more();
  }, []);

  return vars.allUsers.map((user) => (
    <UserItemContainer key={user.id} user={user} refetch={actions.refetch} />
  )) as React.ReactElement; //   Unsafe return of an any typed value 에러 때문에 as React.ReactElement 추가함
};

UserList.propType = {
  allUsers: PropTypes.any.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default UserList;
