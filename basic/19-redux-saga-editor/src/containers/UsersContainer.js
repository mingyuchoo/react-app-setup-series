import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../redux/api';
import Users from '../components/Users';

const UsersContainer = ({ getUsers, users, loadingUsers }) => {
  useEffect(() => {
    getUsers(1);
  }, [getUsers]);
  return <Users users={users} loadingUsers={loadingUsers} />;
};

export default connect(
  (state) => ({
    users: state.apiReducer.users,
    // loadingUsers: state.loadingReducer.GET_USERS,
    loadingUsers: state.loadingReducer['api/GET_USERS'],
  }),
  {
    getUsers,
  }
)(UsersContainer);
