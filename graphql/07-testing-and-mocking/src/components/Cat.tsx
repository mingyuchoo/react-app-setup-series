import { gql, useQuery } from '@apollo/client';
import React from 'react';

export const GET_CAT_QUERY = gql`
  query GetCat($name: String) {
    cat(name: $name) {
      id
      name
      breed
    }
  }
`;

export function Cat({ name }): React.ReactElement {
  const { loading, error, data } = useQuery(GET_CAT_QUERY, { variables: { name } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <p>
      {data.cat.name} is a {data.cat.breed}
    </p>
  );
}
