import { InMemoryCache, ReactiveVar, makeVar } from '@apollo/client';

// reactive variable 초기값
const nameInitialValue: string = '';
const emailInitialValue: string = '';

// reactive variable 선언
export const nameVar: ReactiveVar<string> = makeVar<string>(nameInitialValue);
export const emailVar: ReactiveVar<string> = makeVar<string>(emailInitialValue);

// Field policy for local states
export const cache: InMemoryCache = new InMemoryCache({
  // addTypename: true,
  // resultCaching: true,
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
