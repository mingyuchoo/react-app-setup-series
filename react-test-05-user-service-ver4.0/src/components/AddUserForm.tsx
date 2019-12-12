import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Form } from 'react-bootstrap';
import { User } from './App';

export interface AddUserFormProps {
  addUser: (user: User) => void;
}
export const AddUserForm: React.FC<AddUserFormProps> = (
  props: AddUserFormProps
) => {
  const initialFormState = { id: 0, name: '', username: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Form
      onSubmit={(event: FormEvent<HTMLFormElement>): void => {
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
};

export default AddUserForm;
