import { InMemoryCache, ReactiveVar, makeVar, gql } from '@apollo/client';

// reactive variable 선언
export const nameVar = makeVar<string>('');
export const emailVar = makeVar<string>('');

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
        email: {
          read() {
            return emailVar();
          },
        },
      },
    },
  },
});
