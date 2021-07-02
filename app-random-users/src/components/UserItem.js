import React from "react";
import styled from "styled-components";

const StyledUserItem = styled.div`
  margin: auto;
  width: 100%;
  padding: 1rem;
  ul {
    margin: auto;
    width: 100%;
    padding: 0;
    border: solid 1px yellow;
    list-style-type: none;
    text-algin: left;
  }
  li {
    margin: auto;
    width: 100%;
    padding: 0;
    border: dashed 1px red;
    display: inline-block;
  }
`;

const UserItem = ({ user }) => {
  return (
    <StyledUserItem>
      <ul>
        <li>
          <img src={user.picture.large} alt={user.picture.medium} />
        </li>
        <li> {user.email}</li>
        <li>
          {user.name.first} {user.name.last}
        </li>
      </ul>
    </StyledUserItem>
  );
};

export default UserItem;
