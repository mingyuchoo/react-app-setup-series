import './UserTitle.scss';

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export interface UserTitleProps {
  title: string;
  name: string;
  email: string;
}

const UserTitle: React.FC<UserTitleProps> = ({ title, name, email }: UserTitleProps): React.ReactElement => {
  return (
    <div className="title">
      <h1>
        {title} of {name} ({email})
      </h1>
    </div>
  );
};

UserTitle.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserTitle;
