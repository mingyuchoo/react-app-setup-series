import React from 'react';

import './Title.scss';

import PropTypes from 'prop-types';

/**
 * // Other way (1)
 *
 * export interface TitleProps {
 *   title: string;
 * };
 */

// Other way (2)
Title.propTypes = {
  title: PropTypes.string,
};

/**
 * // Other way (1)
 *
 * const Title: React.FC<TitleProps> = ({ title }: TitleProps): React.ReactElement => {
 */

/**
 * // Other way (2)
 *
 * function Title({ title }: TitleProps): React.ReactElement {
 */

// OTher way (3)
function Title({ title }): React.ReactElement {
  return (
    <div className="title">
      <h1>{title}</h1>
    </div>
  );
}

export default Title;
