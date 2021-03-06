import { gql, useQuery } from '@apollo/client';
import React from 'react';

export const GET_DOG_QUERY = gql`
  query GetDog($name: String) {
    dog(name: $name) {
      id
      name
      breed
    }
  }
`;

interface DogProps {
  name: string;
}

const Dog: React.FC<DogProps> = ({ name }: DogProps): React.ReactElement => {
  const { loading, error, data } = useQuery(GET_DOG_QUERY, { variables: { name } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (!data) return <p>No data</p>;

  return (
    <p>
      {data.dog.name} is a {data.dog.breed}
    </p>
  );
};

export default Dog;
