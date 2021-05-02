import { gql } from '@apollo/client';

export const ALL_TODOS = gql`
  query AllTodos {
    allTodos {
      data {
        _id
        title
        completed
      }
    }
  }
`;
