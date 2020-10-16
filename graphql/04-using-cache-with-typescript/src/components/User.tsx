import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';

import { GET_ALL_USERS } from '../graphql/queries';
import { DELETE_USER_BY_ID } from '../graphql/mutations';

import './UserList.scss';

/**
 * // Other way (1)
 *
 * export interface UserProps {
 *   user: any;
 *   refetch: () => void;
 * };
 */

// Other way (2)
User.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
};

/**
 * // Other way (1)
 *
 * const User:React.FC<UserProps> = ({ user, refetch }: UserProps): React.ReactElement => {
 */

/**
 * // Other way (2)
 *
 * function User({ user, refetch }: UserProps): React.ReactElement {
 */

// Other way (3)
function User({ user, refetch }): React.ReactElement {
  // // Other way (1)
  // const [deleteUser, { loading: mutationLoading, error: mutationError, data }] = useMutation(DELETE_USER_BY_ID, {
  //   refetchQueries: [
  //     {
  //       query: GET_ALL_USERS,
  //     },
  //   ],
  // });
  
  // // Other way (2)
  // const [deleteUser, {loading: mutationLoading, error: mutationError}] = useMutation(DELETE_USER_BY_ID,
  //   {
  //     onCompleted: () => refetch(),
  //   }
  // );
   
  // Other way (3)
  const [deleteUser, {loading: mutationLoading, error: mutationError}] = useMutation(DELETE_USER_BY_ID, {
    update: (cache, { data }) => {
      // TODO 캐시에서 데이터 삭제 처리해야 함
      const getAllUsers = cache.readQuery({query: GET_ALL_USERS});
      // const user = data.deleteUserById;
      // cache.writeQuery({query: GET_ALL_USERS, data: { getAllUsers: []}})
    },
    // onCompleted: () => refetch(),
  });
   
  const onDoubleClickRow = (id, event) => {
    event.preventDefault();
    deleteUser({ variables: { id } });
  };

  // loading
  if (mutationLoading) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }

  // error
  if (mutationError) {
    return (
      <div className="App">
        <h2>Error</h2>
      </div>
    );
  }

  return (
    <div className="list">
      <div className="row" key={user.id} onDoubleClick={(event) => onDoubleClickRow(user.id, event)}>
        <p className="column">{user.name}</p>
        <p className="column">{user.email}</p>
      </div>
    </div>
  );
}

export default User;
