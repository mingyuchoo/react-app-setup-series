import { useLazyQuery, useQuery } from '@apollo/client';

import { ALL_TODOS } from '../../graphql/remote/queries';

export function useAllTodos() {
  return useQuery(ALL_TODOS, {
    fetchPolicy: 'cache-and-network', // [cache-first, cache-only, cache-and-network, network-only, no-cache]
    notifyOnNetworkStatusChange: true,
  });
}

export function useLazyAllTodos() {
  const queryResult = useLazyQuery(ALL_TODOS, {
    fetchPolicy: 'cache-and-network', // [cache-first, cache-only, cache-and-network, network-only, no-cache]
    notifyOnNetworkStatusChange: true,
  });

  return queryResult;
}
