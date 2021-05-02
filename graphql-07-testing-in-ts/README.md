# 07-testing-and-mocking

## 실행 방법

1. `npm install --global yarn` - yarn 사용할 수 있도록 global에 설치
2. `cd ./eact-app-setup-secries; yarn` - 관련된 moudle 설치
3. `cp .env.test .env` - 접속할 서버 환경변수 파일 설정 (`http://sleepy-plains-38954.herokuapp.com/graphql`)
4. `yarn linst` - lint 작업
5. `yarn codegen` - 서버에 있는 graphql schema를 이용하여 typescript에서 사용하는 type 자동 생성
6. `yarn start` - React App 실행 


## 기동이 안 될 때 점검 사항

만약, 시작할 때 에러가 난다면 `src/components/UserList.tsx`에 fetchPolicy가 'cache-only' 이면 'cache-first'로 변경하세요.

## Note

- In React App, if you want to use dotenv, you dont need to install dotenv module and variables of .env file start with `REACT_APP_`
- 예를 들어, Header 콤포넌트와 같은 경우, 'HeaderProps' 를 콤포넌트 선언부 () 인자의 타입({...}: HeaderProps)으로 기술하지 않으면 ESLint에서 'react/prop-types' 관련 '' is missing in props validation 에러를 출력합니다. 그래서 'prop-types' 의 PropTypes 를 이용하여 속성을 정의하거나 콤포넌트 선언부 () 인자의 타입({...}: HeaderProps)으로 정의해야 합니다.
- `yarn add apollo3-cache-persist` 을 추가 했습니다. 이는 apollo/client v3의 문서와 사용법이 다르니 해당 모듈 문서를 따르세요.

### graphql-codegen 모듈 추가와 사용 방법
만약, codegen.yml 파일이 있다면 4번만 실행하세요.

1. `yarn add --dev @graphql-codegen/cli`
2. `yarn add --dev @graphql-codegen/typescript @graphql-codegen/typescript-resolvers @graphql-codegen/typescript-operations`
3. `yarn graphql-codegen init` - generate codegen.yml
4. `yarn codegen`


## Bug Fix

### TypeError: Cannot add property noFallthroughCasesInSwitch, object is not extensible

- https://stackoverflow.com/questions/64115884/error-when-updating-create-react-app-to-4-0-with-typescript-template


## 참고한 페이지

- https://www.freecodecamp.org/news/react-apollo-client-2020-tutorial/#manuallysettingthefetchpolicy
- https://www.polvara.me/posts/how-to-test-asynchronous-methods/
- https://github.com/nearform/graphql-hooks/issues/400
