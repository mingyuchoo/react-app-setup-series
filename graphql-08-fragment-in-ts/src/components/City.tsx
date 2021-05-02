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

export default function City(): ReactElement {
  const { loading, error, data } = useQuery(GET_CITY_BY_NAME);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!data) return <div>No data</div>;

  return <pre>{JSON.stringify(data.getCityByName, null, 2)}</pre>;
}
