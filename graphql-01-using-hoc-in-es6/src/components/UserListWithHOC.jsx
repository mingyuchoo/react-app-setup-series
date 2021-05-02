import React from 'react';
import { graphql } from '@apollo/react-hoc';
import { gql } from '@apollo/client';

const withQuery = graphql(gql`
  query {
    getAllUsers {
      id
      name
      email
    }
  }
`);

function UserListWithHOC({ data: { loading, error, getAllUsers } }) {
  // loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // error
  if (error) {
    return <div>Error!</div>;
  }

  // data
  if (getAllUsers) {
    return (
      <div>
        {getAllUsers.map((user) => (
          <div key={user.id}>
            <p>
              {user.name}: {user.email}
            </p>
          </div>
        ))}
      </div>
    );
  } else {
    return <div>NO DATA.</div>;
  }
}

export default withQuery(UserListWithHOC);
