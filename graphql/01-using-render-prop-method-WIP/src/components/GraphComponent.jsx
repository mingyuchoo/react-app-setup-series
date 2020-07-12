import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

const SAY_HELLO = gql`
  query {
    // 여기에 쿼리 입력
  }
`;

function GraphComponent() {
  const { loading, error, data } = useQuery(SAY_HELLO);
  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (data) {
    {
      /* 데이터가 존재할 때 처리 */
    }
  } else {
    {
      /* 데이터가 없을 때 처리 */
    }
  }
}

export default GraphComponent;
