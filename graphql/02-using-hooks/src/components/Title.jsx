import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

const Title = ({ title }) => {
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
