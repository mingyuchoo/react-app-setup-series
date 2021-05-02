import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ value, handler }) => {
  useEffect(() => {
    console.log(['Input-useEffect()', value].join(', '));
  }, [handler]);

  return (
    <div>
      <input
        className="input"
        type="text"
        name="accessCode"
        placeholder="Type in you access code."
        value={value}
        onChange={handler}
      />
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
export default Input;
