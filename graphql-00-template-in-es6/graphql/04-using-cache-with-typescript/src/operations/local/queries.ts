import { gql } from '@apollo/client';

// Reactive variale 인 name을 사용하기 위한 Local Query
export const GET_NAME = gql`
  query GetName {
    name @client {
      name
    }
  }
`;
