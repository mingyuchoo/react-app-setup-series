import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      name
      email
    }
  }
`;

function CharacterWithRender() {
  return (
    <Query query={GET_ALL_USERS}>
      {({ loading, error, data }) => {
        // loading
        if (loading) return 'Loading...';

        // error
        if (error) return `Error! ${error.message}`;

        // data
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
      }}
    </Query>
  );
}

export default CharacterWithRender;
