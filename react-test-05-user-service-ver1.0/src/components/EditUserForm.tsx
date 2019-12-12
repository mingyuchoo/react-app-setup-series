import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

export function EditUserForm(props) {
  const [user, setUser] = useState(props.currentUser);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }
  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="input"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="input"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button type="submit">Update user</Button>
      <Button onClick={() => props.setEditing(false)}>Cancel</Button>
    </Form>
  );
}
