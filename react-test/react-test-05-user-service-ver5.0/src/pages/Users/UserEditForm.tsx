import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Form } from 'react-bootstrap';
import { User } from './UsersContainer';

export interface UserEditFormProps {
  editing: boolean;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: User;
  updateUser: (id: number, updateUser: User) => void;
}
export const UserEditForm: React.FC<UserEditFormProps> = (
  props: UserEditFormProps
) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    props.updateUser(user.id, user);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
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
      <Button onClick={(): void => props.setEditing(false)}>Cancel</Button>
    </Form>
  );
};

export default UserEditForm;
