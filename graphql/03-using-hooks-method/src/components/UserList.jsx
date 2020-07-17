import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      name
      email
    }
  }
`;

function UserList() {
  const { loading, error, data } = useQuery(GET_ALL_USERS);
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
        <div>
          {data.getAllUsers.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default UserList;
