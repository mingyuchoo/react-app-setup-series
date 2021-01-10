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

### 쿼리 예

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

## Fragment로 확장하기

```graphql

// Weather.tsx
import { gql } from '@apollo/client';
import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';

const WEATHER_FRAGMENT = gql`
  fragment WeatherFragment on City {
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
`;

export default function Weather({ weather }): ReactElement {
  return (
    <>
      <h2>Weather</h2>
      <pre>{JSON.stringify(weather, null, 2)}</pre>
    </>
  );
}
Weather.propTypes = {
  weather: PropTypes.any,
};

Weather.fragments = {
  weather: WEATHER_FRAGMENT,
};
```
