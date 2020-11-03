import { useSubscription } from '@apollo/client';

import { NEW_USER_JOINED } from '../../graphql/remote/subscriptions';

export function useNewUserJoined() {
  return useSubscription(NEW_USER_JOINED);
}

// subscribeToMore에 인자로 사용할 객체
export const moreOptions = {
  document: NEW_USER_JOINED,
  updateQuery: (prev, { subscriptionData }) => {
    if (!subscriptionData.data) return prev;
    const newUserJoined = subscriptionData.data.newUserJoined;
    return Object.assign({}, prev, {
      getAllUsers: [newUserJoined, ...prev.getAllUsers],
    });
  },
};
