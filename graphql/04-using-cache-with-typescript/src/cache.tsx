import { InMemoryCache, ReactiveVar, makeVar, gql } from '@apollo/client';
import { User } from './types/profileTypes';

// reactive variable 선언
export const nameVar: ReactiveVar<String> = makeVar<String>('UNKNOWN');

// Field policy for local states
export const cache = new InMemoryCache({
  addTypename: true,
  resultCaching: true,
  typePolicies: {
    Query: {
      fields: {
        name: {
          read() {
            return nameVar();
          },
        },
      },
    },
  },
});
