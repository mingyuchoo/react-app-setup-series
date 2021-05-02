import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ name, handler }) => {
  return (
    <button className="button" onClick={handler}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handler: PropTypes.func,
};

export default Button;
