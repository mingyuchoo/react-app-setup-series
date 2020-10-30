import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../graphql/remote/queries';

export function useGetAllUsers() {
  return useQuery(GET_ALL_USERS, {
    fetchPolicy: 'cache-and-network', // [cache-first, cache-only, cache-and-network, network-only, no-cache]
    notifyOnNetworkStatusChange: true,
  });
}

// TODO Executeing queries manulally 넣어야 함
export function useLazyGetAllUsers() {
  return useLazyQuery(GET_ALL_USERS);
}
