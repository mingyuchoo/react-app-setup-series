import React, { useState, ReactElement } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { UserTable } from './UsersTable';
import { UserAddForm } from './UserAddForm';
import { UserEditForm } from './UserEditForm';

/**
 * https://www.taniarascia.com/crud-app-in-react-with-hooks/
 */
export interface User {
  id: number;
  name: string;
  username: string;
}

export const UsersContainer: React.FC = (): ReactElement => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ];
  const initialFormState = { id: 0, name: '', username: '' };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = (user: User): void => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id: number): void => {
    setUsers(users.filter(user => user.id !== id));
  };

  const editRow = (user: User): void => {
    setEditing(true);
    const currentUser = {
      id: user.id,
      name: user.name,
      username: user.username,
    };
    setCurrentUser(currentUser);
  };

  const updateUser = (id: number, updatedUser: User): void => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <Container>
      <h1>CRUD App with Hooks</h1>
      <Row>
        {editing ? (
          <Col>
            <h2>Edit user</h2>
            <UserEditForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </Col>
        ) : (
          <Col>
            <h2>Add user</h2>
            <UserAddForm addUser={addUser} />
          </Col>
        )}
        <Col>
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </Col>
      </Row>
    </Container>
  );
};

export default UsersContainer;
