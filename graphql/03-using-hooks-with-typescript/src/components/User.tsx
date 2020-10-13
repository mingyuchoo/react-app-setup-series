import React from 'react';
import { gql, useMutation } from '@apollo/client';
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

// export interface UserProps {
//   user: any;
//   refetch: () => void;
// };
User.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func
}

// const User:React.FC<UserProps> = ({ user, refetch }: UserProps): React.ReactElement => {
// function User({ user, refetch }: UserProps): React.ReactElement {
function User({ user, refetch }): React.ReactElement {

  const [deleteUser, {loading: mutationLoading, error: mutationError}] = useMutation(DELETE_USER_BY_ID,
    {
      onCompleted: () => refetch(),
    }
  );

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
