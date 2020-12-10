# 07-testing-and-mocking

## 실행 방법

만약, codegen.yml 파일이 있다면 4번만 실행하면 됩니다.

1. `yarn add --dev @graphql-codegen/cli`
2. `yarn add --dev @graphql-codegen/typescript @graphql-codegen/typescript-resolvers @graphql-codegen/typescript-operations`
3. `yarn graphql-codegen init` - generate codegen.yml
4. `yarn codegen`

## 기동이 안 될 때 점검 사항

만약, 시작할 때 에러가 난다면 `src/components/UserList.tsx`에 fetchPolicy가 'cache-only' 이면 'cache-first'로 변경하세요.


## Using `apollo-cache-persist` module for cache

apollo/client v3은 기존 버전과 사용방법이 다르니 조심해야 합니다.

1. `yarn add apollo3-cache-persist`

## Note

- In React App, if you want to use dotenv, you dont need to install dotenv module and variables of .env file start with `REACT_APP_`
- 예를 들어, Header 콤포넌트와 같은 경우, 'HeaderProps' 를 콤포넌트 선언부 () 인자의 타입({...}: HeaderProps)으로 기술하지 않으면 ESLint에서 'react/prop-types' 관련 '' is missing in props validation 에러를 출력한다. 그래서 'prop-types' 의 PropTypes 를 이용하여 속성을 정의하거나 콤포넌트 선언부 () 인자의 타입({...}: HeaderProps)으로 정의하던지 해야 한다.

## Bug Fix

### TypeError: Cannot add property noFallthroughCasesInSwitch, object is not extensible

- https://stackoverflow.com/questions/64115884/error-when-updating-create-react-app-to-4-0-with-typescript-template


## 참고한 페이지

- https://www.freecodecamp.org/news/react-apollo-client-2020-tutorial/#manuallysettingthefetchpolicy
- https://www.polvara.me/posts/how-to-test-asynchronous-methods/
- https://github.com/nearform/graphql-hooks/issues/400
