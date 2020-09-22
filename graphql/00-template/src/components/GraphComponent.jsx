import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

const SAY_HELLO = gql`
  query {
    getAllUsers {
      id
      name
      email
    }
  }
`;

function GraphComponent() {
  const { loading, error, data } = useQuery(SAY_HELLO);

  if (loading) {
    // 데이터 로딩 상태
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    // 에러 상황
    return <div>Error</div>;
  }

  if (data) {
    // 데이터가 존재할 때
    return data.getAllUsers.map((user) => (
      <p>
        {user.id}:{user.name}: {user.email}
      </p>
    ));
  } else {
    // 데이터가 없을 때
    return (
      <div className="App">
        <h2>No data</h2>
      </div>
    );
  }
}

export default GraphComponent;
