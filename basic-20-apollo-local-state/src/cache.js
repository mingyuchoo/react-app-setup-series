import { InMemoryCache } from '@apollo/client';

import * as state from './state';

const cache = new InMemoryCache({
  addTypename: true,
  resultCaching: true,
  typePolicies: {
    Query: {
      fields: { ...state },
    },
  },
});

export default cache;
