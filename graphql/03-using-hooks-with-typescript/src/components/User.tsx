import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { GET_ALL_USERS } from './UserList';

import './UserList.scss';

import PropTypes from 'prop-types';

export const DELETE_USER_BY_ID = gql`
  mutation deleteUserById($id: ID!) {
    deleteUserById(id: $id) {
      id
      name
      email
    }
  }
`;

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
  // Other way (1)
  const [deleteUser, { loading: mutationLoading, error: mutationError, data }] = useMutation(DELETE_USER_BY_ID, {
    refetchQueries: [
      {
        query: GET_ALL_USERS,
      },
    ],
  });

  /**
   * // Other way (2)
   * const [deleteUser, {loading: mutationLoading, error: mutationError}] = useMutation(DELETE_USER_BY_ID,
   *   {
   *     onCompleted: () => refetch(),
   *   }
   * );
   */

  const onDoubleClickRow = (id, event) => {
    event.preventDefault();
    deleteUser({ variables: { id } });
  };

  //  // loading
  //  if (mutationLoading) {
  //   return (
  //     <div className="App">
  //       <h2>Loading...</h2>
  //     </div>
  //   );
  // }

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
