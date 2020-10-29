import { useSubscription } from '@apollo/client';
import { NEW_USER_JOINED } from '../../graphql/remote/subscriptions';

export function useNewUserJoined() {
  return useSubscription(NEW_USER_JOINED);
}
