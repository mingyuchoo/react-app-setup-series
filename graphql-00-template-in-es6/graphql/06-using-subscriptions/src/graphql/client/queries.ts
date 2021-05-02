import { gql } from '@apollo/client';

// reactive variale 인 name을 사용하기 위한 local query
export const GET_NAME = gql`
  query GetName {
    name @client
  }
`;

export const GET_EMAIL = gql`
  query GetEmail {
    email @client
  }
`;
