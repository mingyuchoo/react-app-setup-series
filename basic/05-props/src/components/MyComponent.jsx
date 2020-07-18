import React from 'react';
import PropTypes from 'prop-types';

/*
// 방법 1
const MyComponent = (props) => {

  // 비구조화 할당(destructuring assignment)
  const {name, children} = props;

  return (
    <div>
      This is My Component made with {name}
      <p>
        {children}
      </p>
      </div>
    )
}
*/


// 방법 2
const MyComponent = ({name, children, favoriteNumber}) => {

  return (
    <div>
      This is My Component made with {name}
      <p>
        {favoriteNumber}
      </p>
      <p>
        {children}
      </p>
      </div>
    )
}

// 기본 props 설정
MyComponent.defaultProps = {
  name: 'No-name'
}

// props 타입 설정
MyComponent.propTypes = {
  name: PropTypes.string.isRequired
}

export default MyComponent;