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
