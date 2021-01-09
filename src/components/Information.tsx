import { gql, useQuery } from '@apollo/client';
import React, { ReactElement } from 'react';

const GET_CITY_BY_NAME = gql`
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
`;

export default function Information(): ReactElement {
  const { loading, error, data } = useQuery(GET_CITY_BY_NAME);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!data) return <div>No data</div>;

  console.log(data.getCityByName);
  return <div>Hello, World</div>;
}
