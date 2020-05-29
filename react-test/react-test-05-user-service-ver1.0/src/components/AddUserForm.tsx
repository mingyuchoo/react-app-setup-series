import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Form } from 'react-bootstrap';

export function AddUserForm(props) {
  const initialFormState = { id: 0, name: '', username: '' };
  const [user, setUser] = useState(initialFormState);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="input"
          placeholder="Name"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="input"
          placeholder="Username"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button type="submit">Add new user</Button>
    </Form>
  );
}

export default AddUserForm;
