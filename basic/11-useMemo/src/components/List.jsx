import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import './List.scss';

const List = ({ items }) => {
  // function
  const sortItems = () => {
    console.log('sortItems');
    return items.sort();
  };

  // useMemo
  const memoItems = useMemo(sortItems, [items]);

  return (
    <div>
      <ul>
        {memoItems.map((item) => (
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
