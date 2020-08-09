import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostUsers from '../components/PostUsers';
import { getPost, getUsers } from '../modules/redux-api';

const PostUsersContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);
  return (
    <PostUsers
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ apiReducer }) => ({
    post: apiReducer.post,
    users: apiReducer.users,
    loadingPost: apiReducer.loading.GET_POST,
    loadingUsers: apiReducer.loading.GET_USERS,
  }),
  {
    getPost,
    getUsers,
  }
)(PostUsersContainer);
