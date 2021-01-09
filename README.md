# 07-testing-and-mocking

## 실행 방법

1. `npm install --global yarn` - yarn 사용할 수 있도록 global에 설치
2. `cd react-app-setup-secries`
3. `yarn` - 관련된 moudle 설치
4. `cp .env.test .env` - 접속할 서버 환경변수 파일 설정 (`https://graphql-weather-api.herokuapp.com`)
5. `yarn linst` - lint 작업
6. `yarn codegen` - 서버에 있는 graphql schema를 이용하여 typescript에서 사용하는 type 자동 생성
7. `yarn start` - React App 실행

## GraphQL API Server

- https://graphql-weather-api.herokuapp.com/

```graphql
query {
  getCityByName(name: "Seattle") {
    id
    name
    country
    coord {
      lon
      lat
    }
    weather {
      summary {
        title
        description
        icon
      }
      temperature {
        actual
        feelsLike
        min
        max
      }
      wind {
        speed
        deg
      }
      clouds {
        all
        visibility
        humidity
      }
      timestamp
    }
  }
}
```
