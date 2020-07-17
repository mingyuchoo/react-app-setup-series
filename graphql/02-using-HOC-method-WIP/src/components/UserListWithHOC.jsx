import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { withApollo } from 'react-apollo';

const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      name
      email
    }
  }
`;

function UserListWithHOC({ client }) {
  const [users, setUsers] = useState([]);

  client
    .query({ query: GET_ALL_USERS })
    .then((res) => setUsers(res.data.getAllUsers.results))
    .catch((err) => console.log(err));

  if (users.length > 0) {
    return (
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <h2>Loading...</h2>
    </div>
  );
}

export default withApollo(UserListWithHOC);
