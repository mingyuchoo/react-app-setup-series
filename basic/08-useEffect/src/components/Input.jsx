import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, handler }) => {
  return (
    <input
      className="input"
      type="text"
      name="accessCode"
      placeholder="Type in you access code."
      value={value}
      onChange={handler}
    />
  );
};

Input.prototype = {
  currValue: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
export default Input;
