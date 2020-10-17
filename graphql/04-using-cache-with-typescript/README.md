# 04-using-cache-with-typescript

## References

- https://www.freecodecamp.org/news/react-apollo-client-2020-tutorial/#manuallysettingthefetchpolicy

## Check First

만약, 시작할 때 에러가 난다면 `src/components/UserList.tsx`에 fetchPolicy가 'cache-only' 이면 'cache-first'로 변경하세요.

## Using GraphQL Codegen for TypeScript

만약, codegen.yml 파일이 있다면 4번만 실행하면 됩니다.

1. `yarn add --dev @graphql-codegen/cli`
2. `yarn add --dev @graphql-codegen/typescript @graphql-codegen/typescript-resolvers @graphql-codegen/typescript-operations`
3. `yarn graphql-codegen init` - generate codegen.yml
4. `yarn codegen`

## Using `apollo-cache-persist` module for cache

apollo/client v3과 기존 버전에 사용방법이 다르니 조심해야 합니다.

1. `yarn add apollo3-cache-persist`
