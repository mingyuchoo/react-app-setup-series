import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PostUsers from '../components/PostUsers';
import { getPost, getUsers } from '../redux/api';

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
  (state) => ({
    post: state.apiReducer.post,
    users: state.apiReducer.users,
    loadingPost: state.apiReducer.loading.GET_POST,
    loadingUsers: state.apiReducer.loading.GET_USERS,
  }),
  {
    getPost,
    getUsers,
  }
)(PostUsersContainer);
