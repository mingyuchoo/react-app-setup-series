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
        // 데이터 로딩 상황
        if (loading) return 'Loading...';

        // 에러 상황
        if (error) return `Error! ${error.message}`;

        if (data) {
          return (
            <div>
              {data.getAllUsers.map((user) => (
                <div key={user.id}>
                  <p>
                    {user.name}: {user.email}
                  </p>
                </div>
              ))}
            </div>
          );
        } else {
          return (
            <div>
              <h2>데이터 없음</h2>
            </div>
          );
        }
      }}
    </Query>
  );
}

export default CharacterWithRender;
