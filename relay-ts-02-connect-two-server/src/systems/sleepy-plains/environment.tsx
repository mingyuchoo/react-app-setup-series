import { Environment, Network, RecordSource, Store } from "relay-runtime";

function fetchSleepyQuery(operation: any, variables: any) {
  return fetch("https://sleepy-plains-38954.herokuapp.com/graphql", {
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
  network: Network.create(fetchSleepyQuery),
  store: new Store(new RecordSource()),
});
