import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import './UserList.scss';

const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      name
      email
    }
  }
`;

const DELETE_USER_BY_ID = gql`
  mutation deleteUserById($id: ID!) {
    deleteUserById(id: $id) {
      id
      name
      email
    }
  }
`;

const UserList = () => {
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  // const [deleteUser, { data2, error2, loading2 }] = useMutation(DELETE_USER_BY_ID);

  const onDoubleClickRow = (id, event) => {
    event.preventDefault();
    // deleteUser({ variables: { id } });
  };

  // loading
  if (loading) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }
  // error
  if (error) {
    return <div>Error</div>;
  }

  // data
  if (data) {
    if (data.getAllUsers.length > 0) {
      return (
        <div className="list">
          {data.getAllUsers.map((user) => (
            <div className="row" key={user.id} onDoubleClick={(event) => onDoubleClickRow(user.id, event)}>
              <p className="column">{user.name}</p>
              <p className="column">{user.email}</p>
            </div>
          ))}
        </div>
      );
    }
  }
  return <div></div>;
};

export default UserList;
