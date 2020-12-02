import { useQuery } from '@apollo/client';

import { GET_EMAIL, GET_NAME } from '../../graphql/client/queries';

export function useGetName() {
  return useQuery(GET_NAME);
}

export function useGetEmail() {
  return useQuery(GET_EMAIL);
}
