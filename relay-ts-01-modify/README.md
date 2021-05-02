# React App using Relay on JavaScript

## References

- https://relay.dev/docs/en/introduction-to-relay
- https://github.com/facebook/relay/issues/2786
- https://stackoverflow.com/questions/37397886/get-graphql-whole-schema-query

## How to zero to initial setup

- yarn add react-relay
- yarn add --dev relay-config
- yarn add --dev babel-plugin-relay graphql
- yarn add --dev relay-compiler
- yarn add --dev get-graphql-schema

### Shoud be added files

- `relay.config.js`
- `.babelrc`

## How to run

- yarn schema:safe
- yarn schema:sleepy
- yarn relay
- yarn start

## Check Point

- Server - https://sleepy-plains-38954.herokuapp.com/graphql

## TODO

- change `import graphql from "babel-plugin-relay/macro";` to using `.babelrc`
