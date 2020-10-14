import { gql } from '@apollo/client';

export const CREATE_USER_BY_EMAIL = gql`
  mutation createUserByEmail($email: String!, $name: String!) {
    createUserByEmail(email: $email, name: $name) {
      id
      name
      email
    }
  }
`;


export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      name
      email
    }
  }
`;
