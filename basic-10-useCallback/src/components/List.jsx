import React from 'react';
import PropTypes from 'prop-types';

import './List.scss';

const List = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li className="item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
