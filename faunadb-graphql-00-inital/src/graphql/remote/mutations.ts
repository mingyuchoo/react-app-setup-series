import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
  mutation CreateTodo($data: TodoInput!) {
    createTodo(data: $data) {
      _id
      title
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      _id
      title
      completed
    }
  }
`;
