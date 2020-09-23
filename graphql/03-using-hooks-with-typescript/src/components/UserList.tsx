import React from 'react';
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';
import './UserList.scss';

export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      name
      email
    }
  }
`;

export const DELETE_USER_BY_ID = gql`
  mutation deleteUserById($id: ID!) {
    deleteUserById(id: $id) {
      id
      name
      email
    }
  }
`;

const UserList = () => {
  const { loading, data, refetch } = useQuery(GET_ALL_USERS);

  // loading
  if (loading) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }
  return data.getAllUsers.map((user) => <User key={user.id} user={user} refetch={refetch} />);
};

const User = ({ user, refetch }) => {
  const [deleteUser] = useMutation(DELETE_USER_BY_ID, {
    onCompleted: () => refetch(),
  });

  const onDoubleClickRow = (id, event) => {
    event.preventDefault();
    deleteUser({ variables: { id } });
  };

  return (
    <div className="list">
      <div className="row" key={user.id} onDoubleClick={(event) => onDoubleClickRow(user.id, event)}>
        <p className="column">{user.name}</p>
        <p className="column">{user.email}</p>
      </div>
    </div>
  );
};

export default UserList;
