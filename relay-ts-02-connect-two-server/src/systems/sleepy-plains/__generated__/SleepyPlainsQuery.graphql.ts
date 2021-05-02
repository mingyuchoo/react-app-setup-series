/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SleepyPlainsQueryVariables = {};
export type SleepyPlainsQueryResponse = {
    readonly getAllPosts: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
    } | null>;
};
export type SleepyPlainsQuery = {
    readonly response: SleepyPlainsQueryResponse;
    readonly variables: SleepyPlainsQueryVariables;
};



/*
query SleepyPlainsQuery {
  getAllPosts {
    id
    title
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "getAllPosts",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SleepyPlainsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SleepyPlainsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4c1098c2274fd6a3bf4fb9cf1efaa53e",
    "id": null,
    "metadata": {},
    "name": "SleepyPlainsQuery",
    "operationKind": "query",
    "text": "query SleepyPlainsQuery {\n  getAllPosts {\n    id\n    title\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c87e269c5d5e01cbe39683212c14322f';
export default node;
