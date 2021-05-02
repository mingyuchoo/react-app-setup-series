import { Environment, Network, RecordSource, Store } from "relay-runtime";

function fetchSafeQuery(operation: any, variables: any) {
  return fetch("https://safe-journey-01425.herokuapp.com/graphql", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
}

export const environment = new Environment({
  network: Network.create(fetchSafeQuery),
  store: new Store(new RecordSource()),
});
