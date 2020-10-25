import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../graphql/remote/queries';

export function useGetAllUsers() {
  return useQuery(GET_ALL_USERS, {
    fetchPolicy: 'cache-first', // [cache-first, cache-only, cache-and-network, network-only, no-cache]
    notifyOnNetworkStatusChange: true,
  });
}
