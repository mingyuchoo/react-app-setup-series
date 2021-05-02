/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppUserQueryVariables = {};
export type AppUserQueryResponse = {
    readonly getAllPosts: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
    } | null>;
};
export type AppUserQuery = {
    readonly response: AppUserQueryResponse;
    readonly variables: AppUserQueryVariables;
};



/*
query AppUserQuery {
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
    "name": "AppUserQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppUserQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6f85ce54414aaa504953c79c283ba8df",
    "id": null,
    "metadata": {},
    "name": "AppUserQuery",
    "operationKind": "query",
    "text": "query AppUserQuery {\n  getAllPosts {\n    id\n    title\n  }\n}\n"
  }
};
})();
(node as any).hash = '683a5bf1189689bab26a2d9001e1ef09';
export default node;
