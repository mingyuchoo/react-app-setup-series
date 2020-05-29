import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { UserTable } from './UserTable';
import { AddUserForm } from './AddUserForm';
import { EditUserForm } from './EditUserForm';

/**
 * https://www.taniarascia.com/crud-app-in-react-with-hooks/
 */
export function App() {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ];

  const initialFormState = { id: 0, name: '', username: '' };

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  function addUser(user) {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  function deleteUser(id) {
    setUsers(users.filter(user => user.id !== id));
  }

  function editRow(user) {
    setEditing(true);
    const currentUser = {
      id: user.id,
      name: user.name,
      username: user.username,
    };
    setCurrentUser(currentUser);
  }

  function updateUser(id, updatedUser) {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  }

  return (
    <Container>
      <h1>CRUD App with Hooks</h1>
      <Row>
        {editing ? (
          <Col>
            <h2>Edit user</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </Col>
        ) : (
          <Col>
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </Col>
        )}
        <Col>
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
