import { useQuery } from '@apollo/client';
import { GET_NAME, GET_EMAIL } from '../../graphql/client/queries';

export function useGetName() {
  return useQuery(GET_NAME);
}

export function useGetEmail() {
  return useQuery(GET_EMAIL);
}
