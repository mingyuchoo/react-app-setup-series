import React from 'react';
import PropTypes from 'prop-types';

// 방법 1
const List = (props) => {
  // 비구조화 할당(destructuring assignment)
  const { items } = props;

  return (
    <div>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

// props 타입 설정
List.propTypes = {
  items: PropTypes.string.isRequired,
};

export default List;
