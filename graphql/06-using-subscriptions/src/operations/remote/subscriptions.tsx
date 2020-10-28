import { gql, useSubscription } from '@apollo/client';
import { NEW_USER_JOINED } from '../../graphql/remote/subscriptions';

export function getNewUserJoined() {
  return useSubscription(NEW_USER_JOINED);
}
