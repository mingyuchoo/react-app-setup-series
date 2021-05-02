/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SafeJourneyQueryVariables = {};
export type SafeJourneyQueryResponse = {
    readonly findManyGroup: ReadonlyArray<{
        readonly id: number;
        readonly name: string;
    }>;
};
export type SafeJourneyQuery = {
    readonly response: SafeJourneyQueryResponse;
    readonly variables: SafeJourneyQueryVariables;
};



/*
query SafeJourneyQuery {
  findManyGroup {
    id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Group",
    "kind": "LinkedField",
    "name": "findManyGroup",
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
        "name": "name",
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
    "name": "SafeJourneyQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SafeJourneyQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "082ef75dcf371f09ead7527df8b70bd3",
    "id": null,
    "metadata": {},
    "name": "SafeJourneyQuery",
    "operationKind": "query",
    "text": "query SafeJourneyQuery {\n  findManyGroup {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f40e641e78336d56f9214f4e1c2a26ed';
export default node;
