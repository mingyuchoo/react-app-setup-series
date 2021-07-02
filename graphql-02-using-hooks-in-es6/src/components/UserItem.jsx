import React from 'react';
import styled from 'styled-components';

const StyledUserItem = styled.div`
  margin: auto;
  width: 100%;
  border: dashed 1px yellow;
`;

const UserItem = ({ user, onDoubleClickRow }) => {
  return (
    <StyledUserItem onDoubleClick={(event) => onDoubleClickRow(user.id, event)}>
      <p>
        {user.name} - {user.email}
      </p>
    </StyledUserItem>
  );
};

export default UserItem;
