import { gql } from '@apollo/client';

export const NEW_USER_JOINED = gql`
  subscription {
    newUserJoined {
      id
      name
      email
    }
  }
`;
