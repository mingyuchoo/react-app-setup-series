import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ name, handler }) => {
  // function sort() {
  //   return name.split('').sort().join('');
  // }

  // const memoSort = useMemo(sort, [name]);

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
