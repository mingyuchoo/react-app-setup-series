import React from 'react';

import './Title.scss';

import PropTypes from 'prop-types';

// export interface TitleProps {
//   title: string;
// };
Title.propTypes = {
  title: PropTypes.string,
};


// const Title: React.FC<TitleProps> = ({ title }: TitleProps): React.ReactElement => {
// function Title({ title }: TitleProps): React.ReactElement {
function Title({ title }): React.ReactElement {
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
}

export default Title;
