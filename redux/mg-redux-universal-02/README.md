# mg-redux-universal-02

## 포킹

[@emmenko](https://github.com/emmenko)님께서 친절히도 https://github.com/emmenko/redux-react-router-async-example 에 공유해 주시어 이것을 참고해서 조금씩 변경하다가 보니 뭔가 덕지덕지 붙기 시작했습니다. React만 사용하기 부족해서 Flux로 Flux가 뭔가 부족해서 Redux로 Redux에 라우팅기능도 필요해서 Redux-router 가 붙고 또 DB 기능도 있어야 할 것같아 찾아보다 ORM기능하는 Sequelize와 이것으 JSON으로 뽑아주는 Graphql 로... 또 채팅 기능도 있어야 할 것같아 SocketIO를 추가했습니다. 이 코드는 시험용으로만 사용하는 걸로...

## 데모 사이트

https://mg-redux.herokuapp.com/

## 기술 스택

Nodejs + React + React-router + React-intl + Redux + Redux-router + Sequelize + Graphql + PostgreSQL + SocketIO + Fundation

## 패키지 이슈

redux-router를 2.0.0에서 그 이상으로 올리면 화면 랜더링이 안되네요. 왜 그럴까요.
