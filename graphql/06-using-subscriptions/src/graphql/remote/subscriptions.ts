import { gql } from '@apollo/client';

export const NEW_USER_JOINED = gql`
  subscription OnNewUserJoined {
    newUserJoined {
      id
      name
      email
    }
  }
`;
